import prisma from "@/lib/prisma-client";

export async function getLectureById(lectureId: string) {
  if (!lectureId) return;
  
  const lecture = await prisma.lecture.findUnique({
    where: { id: lectureId },
  });

  if(!lecture) return

  return lecture;
}
