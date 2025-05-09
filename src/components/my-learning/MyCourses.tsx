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
        <div className='max-w-5xl mx-auto'>
            <h1 className='mt-4 font-bold text-3xl mb-8'>My learning</h1>

            {
                userInDB.enrolledCourses.map((enrolledUser) => (
                    <Link key={enrolledUser.id} href={`course-detail/${enrolledUser.course.id}`} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        <Card className='border-black border-2 py-0 my-0'>
                            <CardHeader className='relative h-48 w-full'>
                                <Image
                                    fill
                                    className='object-cover rounded-md py-0 my-0'
                                    // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
                                    src={enrolledUser.course.courseThumbnail as string}
                                    alt='course-image'
                                />

                            </CardHeader>
                            <CardContent className=' gap-3'>
                                <h3 className='font-medium text-lg mb-3'>{enrolledUser.course.courseTitle}</h3>
                                <div className='flex items-center justify-between my-4'>
                                    <div className='flex items-center gap-2'>
                                        <Avatar>
                                            <AvatarImage
                                                // src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740'
                                                alt='user-avatar'
                                                src={enrolledUser.course.creator.imageurl as string}
                                            />
                                            <AvatarFallback>UA</AvatarFallback>
                                        </Avatar>

                                        <h3 className='font-medium text-sm'>{enrolledUser.course.creator.name}</h3>
                                    </div>

                                    <div className=''>
                                        <Badge className='rounded-full bg-violet-500'>{enrolledUser.course.courseLevel}</Badge>
                                    </div>
                                </div>

                                <p className='flex items-center'>  <span><IndianRupee size={'16px'} /></span>{enrolledUser.courseAmount}</p>


                            </CardContent>
                        </Card>


                    </Link>
                ))
            }

        </div>
    )
}

export default MyCourses