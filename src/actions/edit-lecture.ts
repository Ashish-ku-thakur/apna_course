"use server";
import cloudinary from "@/lib/cloudinary.config";
import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const editLectureSchema = z.object({
  lectureTitle: z
    .string()
    .min(3, { message: "Lecture Title must beat least 3 char" })
    .max(50, { message: "Lecture Title should not grather then 50 char" }),

  lectureVideo:z.instanceof(File, { message: "Must be a valid video file" }),

  isFree: z.boolean(),
});

type EditLectureFormState = {
  errors: {
    lectureTitle?: string[];
    lectureVideo?: string[];
    isFree?: string[];
    formErrors?: string[];
  };
};

const uploadToCloudinary = async (file: File): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "video", folder: "apna_course" },
      (error, result) => {
        if (error || !result) reject(error || new Error("Upload failed"));
        else resolve(result.secure_url);
      }
    );
    uploadStream.end(buffer);
  });
};

const editLecture = async (
  lectureId: string,
  courseId: string,
  preState: EditLectureFormState,
  formData: FormData
): Promise<EditLectureFormState> => {
  try {
    const result = editLectureSchema.safeParse({
      lectureTitle: formData.get("lecturetitle"),
      lectureVideo: formData.get("lecturevideo"),
      isFree: formData.get("lectureisfree") === "true",
    });

    if (result.success === false) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    //get the video url via cloudinary
    const file = formData.get("lecturevideo") as File | null;

    let videoUrl;
    if (file?.type.startsWith("video/")) {
      videoUrl = await uploadToCloudinary(file);
    }
    // lecture find out ker update karo
    const lecture = await prisma.lecture.update({
      where: {
        id: lectureId,
      },
      data: {
        courseId: courseId,
        lectureTitle: result.data.lectureTitle,
        isFree: result.data.isFree,
        lectureVideoUrl: videoUrl,
      },
    });

    if (!lecture) {
      return {
        errors: {
          formErrors: ["Error Occured While updating the lecture"],
        },
      };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formErrors: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formErrors: ["some internal error while creating the course"],
        },
      };
    }
  }

  revalidatePath(`/admin/course/${courseId}/lecture`);
  redirect(`/admin/course/${courseId}/lecture`);
};
export default editLecture;
