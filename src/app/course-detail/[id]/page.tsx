import CourseDetails from '@/components/course-detail/CourseDetails'
import CourseMetaData from '@/components/course-detail/CourseMetaData'
import prisma from '@/lib/prisma-client'
import React from 'react'

type CourseDetailPageParams = {
  params: Promise<{ id: string }>
}
const page: React.FC<CourseDetailPageParams> = async ({ params }) => {
  const id = (await params).id

  const course = await prisma.course.findUnique({
    where: {
      id: id
    }, include: {
      creator: { select: { name: true } },
      Lecture: true,
      enrolledUsers: {
        include: {
          // course: true,
          user: true // ✅ pure user object milega
        }
      },
      Payment: true
    }


  })

  if (!course) return

  return (
    <div>
      <CourseMetaData course={course} />
      <CourseDetails course={course} />
    </div>
  )
}

export default page