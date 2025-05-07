"use server";

import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createLectureSchema = z.object({
  lectureTitle: z
    .string()
    .min(3, { message: "lecture Title Should be at least 3 char" })
    .max(50, { message: "lecture Title is not grater then 50 char" }),
});

type CreateLectureFormState = {
  errors: {
    lectureTitle?: string[];
    formErrors?: string[];
  };
};

const createLecture = async (
  courseId: string,
  preState: CreateLectureFormState,
  formData: FormData
): Promise<CreateLectureFormState> => {
  try {
    const result = createLectureSchema.safeParse({
      lectureTitle: formData.get("lecturetitle"),
    });

    if (result.success === false) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }
    // console.log({ lectureTitle: formData.get("lecturetitle"), co: courseId });

    // create the lecture
    const createLecture = await prisma.lecture.create({
      data: {
        lectureTitle: result.data.lectureTitle,
        courseId: courseId,
      },
    });

    if (!createLecture) {
      return {
        errors: {
          formErrors: ["Error Occured while creating the lecture"],
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
          formErrors: ["some internal error while creating the lecture"],
        },
      };
    }
  }

  revalidatePath(`/admin/course/${courseId}/lecture`);
  redirect(`/admin/course/${courseId}/lecture`);
};

export default createLecture;
