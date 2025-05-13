'use server'
import prisma from "@/lib/prisma-client";
// import { revalidatePath } from "next/cache";

export async function getLectureById(lectureId: string) {
  console.log("lectureId", lectureId);
  if (!lectureId) return;

  const lecture = await prisma.lecture.findUnique({
    where: {
      id: lectureId,
    },
  });
  console.log("lecture->", lecture);

  if (!lecture) return;

  // revalidatePath(`/course-detail/${lecture.courseId}`);
  return lecture;
}
