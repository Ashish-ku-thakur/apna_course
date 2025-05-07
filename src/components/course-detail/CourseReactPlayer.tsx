'use client'
import React from 'react'
import { Card, CardHeader } from '../ui/card'
import ReactPlayer from 'react-player'
import { IndianRupee } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Lecture } from '@/generated/prisma'
import ByCourseBtn from './buyCourse/ByCourseBtn'

type CourseReactPlayerProps = {
    lectureData: Lecture | ""
}
const CourseReactPlayer: React.FC<CourseReactPlayerProps> = ({ lectureData }) => {
    console.log(lectureData);
    if (lectureData === "") return
    return (
        <Card>
            <CardHeader>
                <ReactPlayer
                    url={lectureData.lectureVideoUrl as string}
                    controls={lectureData.isFree}  // ✅ proper way
                    width="100%"
                    height="100%"
                />

            </CardHeader>
            <CardHeader>
                <h2>Set-up Vs Code</h2>
                <hr className=' border-black' />
                <div className='flex items-center gap-3 my-3 text-2xl font-bold'>
                    <h3 className=''>Course Prise:</h3>
                    <p className='flex items-center gap-1'>
                        <IndianRupee size={'20px'} />
                        <span className=''>2</span>
                    </p>
                </div>

                <ByCourseBtn courseId={lectureData.courseId} />
            </CardHeader>
        </Card>
    )
}

export default CourseReactPlayer