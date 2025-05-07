'use server'
import prisma from '@/lib/prisma-client'
import { SquarePen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type ShowLecturesProps = {
    courseId: string
}
const ShowLectures: React.FC<ShowLecturesProps> = async ({ courseId }) => {
    const lectures = await prisma.lecture.findMany({
        where: {
            courseId: courseId
        }
    })



    if (lectures.length <= 0) {
        return <p>There is no lecture</p>
    }
    return (
        <div className='space-y-2'>
            {
                lectures && lectures.map((lecture, index) => (

                    <div key={lecture.id} className='flex items-center gap-3 bg-gray-200 rounded-sm p-2'>
                        <p>Lecture:{index + 1}</p>
                        <div className='flex items-center justify-between w-full'>
                            <span >{lecture.lectureTitle}</span>
                            <Link href={`lecture/${lecture.id}`}>
                                <SquarePen strokeWidth={'1px'} />
                            </Link>
                        </div>

                    </div>

                ))
            }



        </div>
    )
}

export default ShowLectures