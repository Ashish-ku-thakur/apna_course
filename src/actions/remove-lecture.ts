"use server";

import { Lecture } from "@/generated/prisma";
import cloudinary from "@/lib/cloudinary.config";
import prisma from "@/lib/prisma-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const removeLecture = async (lecture: Lecture) => {
  try {
    // Get publicId from the Cloudinary URL
    // const publicId = lecture.lectureVideoUrl?.split("/").pop()?.split(".")[0];
    const publicId = lecture.lectureVideoUrl
      ?.split("/")
      .slice(-2)
      .join("/")
      .split(".")[0];

    // const url = new URL(lecture.lectureVideoUrl!);
    // console.log("url->", url);
    
    // const segments = url.pathname.split("/");
    // const folder = segments[segments.length - 2]; // 'video' // slice(-2) ['apna_course', 's4gd9yumy6xwzbd3trwj.mp4]
    // const fileName = segments[segments.length - 1].split(".")[0]; // 's4gd9yumy6xwzbd3trwj'
    // const publicId = `${folder}/${fileName}`;
    // console.log("publicId->", publicId);

    if (publicId) {
      // Delete video from Cloudinary
      console.log("inside PublicId");

      await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(
          publicId,
          { resource_type: "video" },
          (error, result) => {
            if (error || !result) {
              reject(error);
            } else {
              console.log("inside result");
              resolve(result);
            }
          }
        );
      });

      // await cloudinary.uploader.destroy(publicId, { resource_type: "video" });
    }

    // Delete lecture from DB
    await prisma.lecture.delete({
      where: {
        id: lecture.id,
      },
    });

    // Revalidate and Redirect
  } catch (error) {
    console.error("Error removing lecture:", error);
    throw new Error("Failed to remove lecture");
  }
  revalidatePath(`/admin/course/${lecture.courseId}/lecture`);
  redirect(`/admin/course/${lecture.courseId}/lecture`);
};
