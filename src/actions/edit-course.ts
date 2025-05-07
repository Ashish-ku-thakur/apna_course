"use server";

import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { date, z } from "zod";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.CLOUD_API_SECRET,
  api_key: process.env.CLOUD_API_KEY,
});

const editCourseSchema = z.object({
  courseTitle: z
    .string()
    .min(3, { message: "Course Title Should be at least 3 char" })
    .max(50, { message: "Course Title is not grater then 50 char" }),
  courseSubtitle: z
    .string()
    .min(3, { message: "Course Subtitle Should be at least 3 char" })
    .max(50, { message: "Course Subtitle is not grater then 50 char" }),
  courseCategory: z
    .string()
    .min(3, { message: "Please Select any One Category" }),
  courseLevel: z.enum(["BIGGNER", "MEDIUM", "ADVANCE"]),
  coursePrice: z.string(),

  courseDescription: z
    .string()
    .min(3, { message: "Course Description Should be at least 3 char" }),
});

export type EditCourseFormState = {
  errors: {
    courseTitle?: string[];
    courseSubtitle?: string[];
    courseCategory?: string[];
    courseLevel?: string[];
    coursePrice?: string[];
    courseDescription?: string[];
    formErrors?: string[];
  };
};

const editCourse = async (
  courseId: string,
  preState: EditCourseFormState,
  formData: FormData
): Promise<EditCourseFormState> => {
  try {
    const result = editCourseSchema.safeParse({
      courseTitle: formData.get("coursetitle"),
      courseSubtitle: formData.get("coursesubtitle"),
      courseCategory: formData.get("coursecategory"),
      courseLevel: formData.get("courselevel"),
      coursePrice: formData.get("courseprice"),
      courseDescription: formData.get("coursedescription"),
    });
   

    if (result.success === false) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    // find out karo course thumbnail
    const img = formData.get("coursethumbnail") as File | null;

    let imageUri;

    if (img?.type.startsWith("image/")) {
      // matlb img hai
      const arrayBuffer = await img.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const base64 = buffer.toString("base64");
      const mymeType = img.type;

      const dataUri = `data:${mymeType};base64,${base64}`;
      const cloudResponse = await cloudinary.uploader.upload(dataUri, {
        folder: `apna_course`,
      });

      if (!cloudResponse.secure_url) {
        return {
          errors: {
            formErrors: ["cloudResponse Failed"],
          },
        };
      }

      imageUri = cloudResponse.secure_url;
    }

    const course = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        courseTitle: result.data.courseTitle,
        courseSubtitle: result.data.courseSubtitle,
        courseCategory: result.data.courseCategory,
        courseDescription: result.data.courseDescription,
        courseLevel: result.data.courseLevel,
        coursePrice: result.data.coursePrice.toString(),
        courseThumbnail: imageUri,
      },
    });

    if (!course) {
      return {
        errors: {
          formErrors: ["Course not found"],
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
  revalidatePath(`/admin/course`);
  redirect(`/admin/course`);
};

export default editCourse;
