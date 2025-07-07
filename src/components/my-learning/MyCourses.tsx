import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Prisma } from '@/generated/prisma'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type MyCoursesProps = {
    userInDB: Prisma.UserGetPayload<{
        include: {
            enrolledCourses: {
                include: {
                    course: {
                        include: {
                            creator: true
                        }
                    }
                }
            }
        }
    }>
}

const MyCourses: React.FC<MyCoursesProps> = ({ userInDB }) => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-10'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left'>My Learning</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {userInDB.enrolledCourses.map((enrolledUser) => (
                    <Link key={enrolledUser.id} href={`course-detail/${enrolledUser.course.id}`}>
                        <Card className='border border-gray-300 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'>
                            <CardHeader className='relative h-48 w-full'>
                                <Image
                                    fill
                                    className='object-cover'
                                    alt='course-thumbnail'
                                    src={enrolledUser.course.courseThumbnail as string}
                                />
                            </CardHeader>

                            <CardContent className='p-4 space-y-4'>
                                <h3 className='font-semibold text-base sm:text-lg'>{enrolledUser.course.courseTitle}</h3>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <Avatar className='h-8 w-8'>
                                            <AvatarImage
                                                alt='user-avatar'
                                                src={enrolledUser.course.creator.imageurl as string}
                                            />
                                            <AvatarFallback>UA</AvatarFallback>
                                        </Avatar>
                                        <span className='text-sm font-medium'>{enrolledUser.course.creator.name}</span>
                                    </div>

                                    <Badge className='rounded-full bg-violet-500 text-white text-xs'>
                                        {enrolledUser.course.courseLevel}
                                    </Badge>
                                </div>

                                <p className='flex items-center gap-1 text-sm sm:text-base'>
                                    <IndianRupee size={16} /> {enrolledUser.courseAmount}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MyCourses
