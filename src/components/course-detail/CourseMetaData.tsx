'use client'
import { Prisma } from '@/generated/prisma'
import { CalendarSync } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type CourseMetaDataProps = {
    course: Prisma.CourseGetPayload<{
        include: {
            creator: { select: { name: true } },
            Lecture: true,
            enrolledUsers: {
                include: {
                    // course:true,
                    user: true // ✅ pure user object milega
                }
            },
            Payment: true
        }
    }>;
}

const CourseMetaData: React.FC<CourseMetaDataProps> = ({ course }) => {
    const [formattedDate, setFormattedDate] = useState<string>('')

    useEffect(() => {
        const date = new Date(course.createdAt)
        setFormattedDate(date.toDateString())
    }, [course.createdAt])

    console.log("course->", course);


    return (
        <div className='max-w-full border-black border-2 bg-gradient-to-b from-indigo-600 to bg-violet-600'>
            <div className='max-w-7xl mx-auto py-8 space-y-2 text-white'>
                <h1 className='font-bold text-2xl '>{course.courseTitle}</h1>
                <h2 className='font-medium'>{course.courseSubtitle}</h2>
                <h3>Created By <span className='underline text-gray-400 text-sm'> {course.creator.name}</span></h3>
                <div className='flex items-center gap-2'>
                    <CalendarSync size={'16px'} />
                    <h4>Last UpdatesAt <span>{formattedDate}</span></h4>
                </div>
                <h5>Students enrolled <span>{course.enrolledUsers.length ? course.enrolledUsers.length : "NA"}</span></h5>
            </div>
        </div>
    )
}

export default CourseMetaData
