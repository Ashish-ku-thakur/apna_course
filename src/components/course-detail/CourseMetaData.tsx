import { Prisma } from '@/generated/prisma'
import { CalendarSync } from 'lucide-react'
import React from 'react'

type CourseMetaDataProps = {
    course: Prisma.CourseGetPayload<{
        include: {
            creator: {
                select: {
                    name: true
                }
            }
        }
    }>
}
const CourseMetaData: React.FC<CourseMetaDataProps> = ({ course }) => {

    return (
        <div className='max-w-full border-black border-2 bg-gradient-to-b from-indigo-600 to bg-violet-600'>

            <div className='max-w-7xl mx-auto py-8 space-y-2 text-white'>
                <h1 className='font-bold text-2xl '>{course.courseTitle}</h1>
                <h2 className='font-medium'>{course.courseSubtitle}</h2>
                <h3>Created By <span className='underline text-gray-400 text-sm'> {course.creator.name}</span></h3>
                <p className='flex items-center gap-2'>
                    <CalendarSync size={'16px'} />
                    <h4>Last UpdatesAt <span>{course.createdAt.toDateString()}</span></h4>
                </p>
                <h5>Students inrolled <span>2</span></h5>
            </div>

            {/* <div>
                <h2>Description</h2>
            </div> */}
        </div>
    )
}

export default CourseMetaData