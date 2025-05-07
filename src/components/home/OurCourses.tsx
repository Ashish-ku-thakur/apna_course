

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { IndianRupee } from 'lucide-react'
import Link from 'next/link'
import { Prisma } from '@/generated/prisma'

type OurCoursesProps = {
    courses: Prisma.CourseGetPayload<{
        include: {
            creator: {
                select: {
                    name: true,
                    imageurl: true
                }
            }
        }
    }>[]
}

const OurCourses: React.FC<OurCoursesProps> = ({ courses }) => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <h1 className='font-bold text-3xl text-center my-6'>Our Courses</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    courses.map((course) => (
                        <Link key={course.id} href={`course-detail/${course.id}`} >
                            <Card className='border-black border-2 py-0 my-0'>
                                <CardHeader className='relative h-48 w-full'>
                                    <Image
                                        fill
                                        className='object-cover rounded-md py-0 my-0'
                                        alt='course-image'
                                        src={course.courseThumbnail as string}
                                    />

                                </CardHeader>
                                <CardContent className=' gap-3'>
                                    <h3 className='font-medium text-lg mb-3'>{course.courseTitle}</h3>
                                    <div className='flex items-center justify-between my-4'>
                                        <div className='flex items-center gap-2'>
                                            <Avatar>
                                                <AvatarImage
                                                    alt='user-avatar'
                                                    src={course.creator.imageurl as string}
                                                />
                                                <AvatarFallback>UA</AvatarFallback>
                                            </Avatar>

                                            <h3 className='font-medium text-sm'>{course.creator.name}</h3>
                                        </div>

                                        <div className=''>
                                            <Badge className='rounded-full bg-violet-500'>{course.courseLevel}</Badge>
                                        </div>
                                    </div>

                                    <p className='flex items-center'>  <span><IndianRupee size={'16px'} /></span>{course.coursePrice}</p>


                                </CardContent>
                            </Card>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default OurCourses
