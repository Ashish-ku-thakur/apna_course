'use server'
import CourseEdit from '@/components/admin/course/CourseEdit'
import PublishCourse from '@/components/admin/course/courseId/publish/PublishCourse'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma-client'
import Link from 'next/link'
import React from 'react'

type CourseByIdPageProps = {
    params: Promise<{ id: string }>
}

const page: React.FC<CourseByIdPageProps> = async ({ params }) => {
    const id = (await params).id
    const course = await prisma.course.findUnique({
        where: {
            id
        }
    })

    if (!course) {
        return <p>Course Not Found</p>
    }
    // course hai
    return (
        <div className='px-8 pt-4 max-h-screen'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Add Detailed Information Regarding This Course</h1>

                <Link href={`/admin/course/${id}/lecture`}>
                    <Button>Add Lecture</Button>
                </Link>
            </div>

            <div className='my-2.5'>
              <PublishCourse course={course}/> 
            </div>
            <CourseEdit courseId={id} course={course} />
        </div>
    )
}

export default page