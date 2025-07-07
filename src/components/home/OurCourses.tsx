import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
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
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h1 className='font-bold text-2xl sm:text-3xl text-center mb-8'>Our Courses</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {courses.map((course) => (
                    <Link key={course.id} href={`course-detail/${course.id}`}>
                        <Card className='border border-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'>
                            <CardHeader className='relative h-48 w-full'>
                                <Image
                                    fill
                                    className='object-cover'
                                    alt='course-thumbnail'
                                    src={course.courseThumbnail as string}
                                />
                            </CardHeader>

                            <CardContent className='p-4 flex flex-col gap-3'>
                                <h3 className='font-semibold text-base sm:text-lg'>{course.courseTitle}</h3>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <Avatar className='h-8 w-8'>
                                            <AvatarImage
                                                alt='user-avatar'
                                                src={course.creator.imageurl as string}
                                            />
                                            <AvatarFallback>UA</AvatarFallback>
                                        </Avatar>
                                        <span className='text-sm font-medium'>{course.creator.name}</span>
                                    </div>

                                    <Badge className='rounded-full bg-violet-500 text-white text-xs'>
                                        {course.courseLevel}
                                    </Badge>
                                </div>

                                <p className='flex items-center gap-1 text-sm sm:text-base'>
                                    <IndianRupee size={16} /> {course.coursePrice}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default OurCourses
