'use server'
import prisma from "@/lib/prisma-client";

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

  return lecture;
}
