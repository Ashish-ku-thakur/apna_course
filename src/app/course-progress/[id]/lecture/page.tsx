'use server'
import CourseProgressPage from '@/components/course-progress/CourseProgressPage'
// import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma-client'
import React from 'react'

type CourseProgressPageParams = {
    params: Promise<{ id: string }>
}

const Page: React.FC<CourseProgressPageParams> = async ({ params }) => {
    const { id } = (await params)
    console.log(id);


    const course = await prisma.course.findUnique({
        where: {
            id: id
        }, include: {
            Lecture: {
                include:{
                    LectureProgress:true
                }
            },
            // LectureProgress:{
            //     include:{
            //         lecture:true
            //     }
            // }
        }
    })


    if (!course) return
    return (


        <div>
            {/* Main Content */}
            < CourseProgressPage course={course} />
        </div >

    )
}

export default Page
