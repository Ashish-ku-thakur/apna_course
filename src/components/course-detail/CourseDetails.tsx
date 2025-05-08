'use server'
import React from 'react'
import { Prisma } from '@/generated/prisma'
import CourseDescription from './CourseDescription'

type CourseDetailsProps = {
    course: Prisma.CourseGetPayload<{
        include: {
          creator: { select: { name: true } },
          Lecture: true,
          enrolledUsers: {
            include: {
                // course:true,
                user:true // ✅ pure user object milega
              }
          },
          Payment: true
        }
      }>;
}
const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
    return (
        <div className='max-w-7xl mx-auto  my-8'>
            <CourseDescription course={course} />

        </div>
    )
}

export default CourseDetails