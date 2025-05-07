'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LocateFixed } from 'lucide-react'
import React from 'react'
import ReactPlayer from 'react-player'

const Page = () => {
    return (
        <div className="max-w-7xl mx-auto">

            {/* Top Header */}
            <div className="flex items-center justify-between my-5 px-4">
                <p className="font-bold text-2xl">Course Title</p>
                <Button>Completed</Button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row gap-4 p-4">

                {/* Left Section */}
                <section className="flex-1 p-4 rounded-lg">
                    <Card>
                        <CardHeader className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                            <ReactPlayer
                                url="https://videos.pexels.com/video-files/7657449/7657449-hd_1920_1080_25fps.mp4"
                                controls
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </CardHeader>

                        <CardContent>
                            <Separator className="my-4 bg-black h-[1px]" />
                            <h2 className="text-xl font-semibold">Set-up Vs Code</h2>
                        </CardContent>
                    </Card>
                </section>

                {/* Vertical Separator */}
                <div className="hidden md:block">
                    <Separator orientation="vertical" className="h-full bg-black w-[2px]" />
                </div>

                {/* Right Section */}
                <section className="w-full md:w-[30%] p-4 rounded-lg">
                    <p className="text-lg font-medium">
                        <div>
                            <p>Courses Lectures</p>
                            <ul className='my-4 space-y-2 cursor-pointer'>
                                <div className='flex items-center justify-between p-3 bg-gray-200 rounded-md'>

                                    <li className='flex items-center gap-2'>
                                        <span> <LocateFixed size={'16px'} /></span>
                                        Set-up Vs Code
                                    </li>
                                    <p className='text-sm text-green-400'>Watched</p>
                                </div>
                                <div className='flex items-center justify-between p-3 bg-gray-200 rounded-md'>

                                    <li className='flex items-center gap-2'>
                                        <span> <LocateFixed size={'16px'} /></span>
                                       Complete vs code
                                    </li>
                                    <p className='text-sm text-green-400'>UnWatched</p>
                                </div>


                            </ul>
                        </div>
                    </p>
                </section>

            </div>

        </div>
    )
}

export default Page
