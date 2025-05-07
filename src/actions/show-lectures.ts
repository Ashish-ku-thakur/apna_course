import prisma from "@/lib/prisma-client"

const showLectures = async (courseId: string) => {
  try {
    const lectures = await prisma.lecture.findMany({
      where: {
        courseId: courseId,
      },
    })

    return lectures
  } catch (error) {
    console.error("Failed to fetch lectures", error)
    return []
  }
}

export default showLectures
