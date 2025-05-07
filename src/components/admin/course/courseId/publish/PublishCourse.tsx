'use server'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma-client'
import React from 'react'
import PublishBtn from './PublishBtn'
import { Course } from '@/generated/prisma'

type PublishCourseProps = {
    course: Course
}

const PublishCourse: React.FC<PublishCourseProps> = async ({ course }) => {
    const lectures = await prisma.lecture.findMany({
        where: {
            courseId: course.id
        }
    })


    return (
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='font-medium'>Course Information</h3>
                <p className='text-sm'>
                    Make Changes To Your Course Here. Click Save When You are Done.
                </p>
            </div>

            <div className='space-x-3'>
                <PublishBtn lectures={lectures} course={course}/>
                <Button>Remove Course</Button>
            </div>
        </div>
    )
}

export default PublishCourse
