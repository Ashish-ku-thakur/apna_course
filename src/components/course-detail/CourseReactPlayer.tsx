'use client'
import React from 'react'
import { Card, CardHeader } from '../ui/card'
import ReactPlayer from 'react-player'
import { IndianRupee } from 'lucide-react'
import { Lecture, Prisma } from '@/generated/prisma'
import ByCourseBtn from './buyCourse/ByCourseBtn'
import { Button } from '../ui/button'
import Link from 'next/link'

type CourseReactPlayerProps = {
    lectureData: Lecture | "";
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
    isUserEnrolled: boolean
}

const CourseReactPlayer: React.FC<CourseReactPlayerProps> = ({ lectureData, course, isUserEnrolled }) => {

    if (lectureData === "") return null;

    return (
        <Card>
            <CardHeader>
                <ReactPlayer
                    url={lectureData.lectureVideoUrl as string}
                    controls={isUserEnrolled||lectureData.isFree}  // ✅ proper way
                    width="100%"
                    height="100%"
                />
            </CardHeader>
            <CardHeader>
                <h2>Set-up Vs Code</h2>
                <hr className='border-black' />
                <div className='flex items-center gap-3 my-3 text-2xl font-bold'>
                    <h3 className=''>Course Price:</h3>
                    <p className='flex items-center gap-1'>
                        <IndianRupee size={'20px'} />
                        <span>{course.coursePrice}</span>
                    </p>
                </div>

                {/* Display Buy button only if user is not enrolled */}
                {!isUserEnrolled && <ByCourseBtn courseId={lectureData.courseId} />}
                {/* Optionally, you can show a message for enrolled users */}

                {isUserEnrolled && <Link href={`/course-progress/${course.id}/lecture`}>
                    <Button className='w-full cursor-pointer'>
                        Continue
                    </Button>
                </Link>}
            </CardHeader>
        </Card>
    );
}

export default CourseReactPlayer;
