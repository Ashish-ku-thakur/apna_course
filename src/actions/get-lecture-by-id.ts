import prisma from "@/lib/prisma-client";

export async function getLectureById(lectureId: string) {
  const lecture = await prisma.lecture.findUnique({
    where: { id: lectureId },
  });

  return lecture;
}
