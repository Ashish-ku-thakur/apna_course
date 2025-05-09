// ✅ Server Action (app/actions/viewd-lecture.ts)
"use server";

import prisma from "@/lib/prisma-client";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const viewdLecture = async (lectureId: string, courseId: string) => {
  if (!lectureId || !courseId) return;

  const clerkUser = await currentUser();
  if (!clerkUser) return;

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (!user) return;

  let lectureProgress = await prisma.lectureProgress.findUnique({
    where: {
      userId_lectureId_courseId: {
        userId: user.id,
        lectureId,
        courseId,
      },
    },
  });

  if (!lectureProgress) {
    lectureProgress = await prisma.lectureProgress.create({
      data: {
        userId: user.id,
        lectureId,
        courseId,
        viewed: true,
      },
    });
  } else if (!lectureProgress.viewed) {
    lectureProgress = await prisma.lectureProgress.update({
      where: {
        userId_lectureId_courseId: {
          userId: user.id,
          lectureId,
          courseId,
        },
      },
      data: { viewed: true },
    });
  }

  revalidatePath(`/course-progress/${courseId}/lecture?lectureId=${lectureId}`);
  return lectureProgress;
};

export default viewdLecture;