"use server";
import prisma from "@/lib/prisma-client";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreateCourseSchema = z.object({
  courseTitle: z
    .string()
    .min(3, { message: "Course Title Should be at least 3 char" }),
  courseLevel: z.enum(["BIGGNER", "MEDIUM", "ADVANCE"]),
});

type createCourseFormError = {
  errors: {
    courseTitle?: string[];
    courseLevel?: string[];
    formErrors?: string[];
  };
};

const createCourse = async (
  preState: createCourseFormError,
  formData: FormData
): Promise<createCourseFormError> => {
  try {
    const result = CreateCourseSchema.safeParse({
      courseTitle: formData.get("coursetitle"),
      courseLevel: formData.get("courselevel"),
    });

    if (result.success === false) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    // find the user
    const user = await currentUser();

    if (!user) {
      return {
        errors: {
          formErrors: ["you are not authenticated"],
        },
      };
    }

    // abctract the user id
    const findUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (!findUser) {
      return {
        errors: {
          formErrors: ["you are not authenticated"],
        },
      };
    }

    // create the course
    const createCourse = await prisma.course.create({
      data: {
        courseTitle: result.data.courseTitle,
        courseLevel: result.data.courseLevel,
        creatorId: findUser.id,
      },
    });

    if (!createCourse) {
      return {
        errors: {
          formErrors: [
            "something went wrong corse not create, please try again",
          ],
        },
      };
    }

    // return result
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

  revalidatePath("/admin/course");
  redirect("/admin/course");
};

export default createCourse;
