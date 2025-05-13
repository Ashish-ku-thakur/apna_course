"use server";

import { Lecture } from "@/generated/prisma";
import cloudinary from "@/lib/cloudinary.config";
import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const removeLecture = async (lecture: Lecture) => {
  try {
    const publicId = lecture.lectureVideoUrl
      ?.split("/")
      .slice(-2)
      .join("/")
      .split(".")[0];


    if (publicId) {
      await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(
          publicId,
          { resource_type: "video" },
          (error, result) => {
            if (error || !result) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
      });

    }

    // Delete lecture from DB
    await prisma.lecture.delete({
      where: {
        id: lecture.id,
      },
    });

  } catch (error) {
    console.error("Error removing lecture:", error);
    throw new Error("Failed to remove lecture");
  }
  revalidatePath(`/admin/course/${lecture.courseId}/lecture`);
  redirect(`/admin/course/${lecture.courseId}/lecture`);
};
