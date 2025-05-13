"use server";

import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const unPublishCourse = async (courseId: string) => {
  try {
    // find out the course
    await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        coursePublished: false,
      },
    });
  } catch (error) {
     console.error("Error removing lecture:", error);
    throw new Error("Failed to remove lecture");
  }

  revalidatePath(`/admin/course/${courseId}`);
  redirect(`/admin/course/${courseId}`);
};

export default unPublishCourse;
