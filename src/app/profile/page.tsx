import OurCourses from '@/components/home/OurCourses'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='font-bold text-2xl mt-4 mb-8'>Profile</h1>
            <div className='flex gap-6 items-center'>
                <Avatar className='w-30 h-30 rounded-full'>
                    <AvatarImage
                        // src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740"
                        alt="user-avatar"
                    />
                    <AvatarFallback>UA</AvatarFallback>
                </Avatar>

                <div className='space-y-2'>
                    <div className='flex items-center gap-2'>
                        <Label className='font-bold'>Name:</Label>
                        <p>Ashish Kumar Thakur</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Label className='font-bold'>Email:</Label>
                        <p>ashish@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Label className='font-bold'>Role:</Label>
                        <p>Student</p>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Edit Profile</Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    <p className="text-lg font-semibold">Edit Profile</p>
                                </DialogTitle>
                                <DialogDescription className="text-sm text-muted-foreground">
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4 mt-4">

                                {/* Name Input */}
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name:</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="px-3 focus-visible:ring-0 col-span-2"
                                    />
                                </div>

                                {/* Profile Photo Input */}
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <Label htmlFor="photo" className="text-right">Profile Photo:</Label>
                                    <Input
                                        id="photo"
                                        type="file"
                                        className="px-3 focus-visible:ring-0 col-span-2"
                                    />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
            </div>

            <div className='mt-8'>
                <h2 className='font-bold text-xl'>Courses You are Inrolled in</h2>
            </div>

            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

                <Link href={'course-detail/123'}>
                    <Card className='border-black border-2 py-0 my-0'>
                        <CardHeader className='relative h-48 w-full'>
                            <Image
                                fill
                                className='object-cover rounded-md py-0 my-0'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
                                alt='course-image'
                            />

                        </CardHeader>
                        <CardContent className=' gap-3'>
                            <h3 className='font-medium text-lg mb-3'>HTML</h3>
                            <div className='flex items-center justify-between my-4'>
                                <div className='flex items-center gap-2'>
                                    <Avatar>
                                        <AvatarImage
                                            src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740'
                                            alt='user-avatar'
                                        />
                                        <AvatarFallback>UA</AvatarFallback>
                                    </Avatar>

                                    <h3 className='font-medium text-sm'>Ashish kumar</h3>
                                </div>

                                <div className=''>
                                    <Badge className='rounded-full bg-violet-500'>Biggner</Badge>
                                </div>
                            </div>

                            <p className='flex items-center'>  <span><IndianRupee size={'16px'} /></span>23</p>


                        </CardContent>
                    </Card>


                </Link>

                <Link href={'course-detail/123'}>
                    <Card className='border-black border-2 py-0 my-0'>
                        <CardHeader className='relative h-48 w-full'>
                            <Image
                                fill
                                className='object-cover rounded-md py-0 my-0'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
                                alt='course-image'
                            />

                        </CardHeader>
                        <CardContent className=' gap-3'>
                            <h3 className='font-medium text-lg mb-3'>HTML</h3>
                            <div className='flex items-center justify-between my-4'>
                                <div className='flex items-center gap-2'>
                                    <Avatar>
                                        <AvatarImage
                                            src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740'
                                            alt='user-avatar'
                                        />
                                        <AvatarFallback>UA</AvatarFallback>
                                    </Avatar>

                                    <h3 className='font-medium text-sm'>Ashish kumar</h3>
                                </div>

                                <div className=''>
                                    <Badge className='rounded-full bg-violet-500'>Biggner</Badge>
                                </div>
                            </div>

                            <p className='flex items-center'>  <span><IndianRupee size={'16px'} /></span>23</p>


                        </CardContent>
                    </Card>


                </Link>
            </div>
        </div>
    )
}

export default page