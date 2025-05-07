'use client'
import editLecture from '@/actions/edit-lecture'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Lecture } from '@/generated/prisma'
import { Loader2, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React, { startTransition, useActionState, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import axios from "axios"
import RemoveLecture from './RemoveLecture'
import ReactPlayer from 'react-player'


type EditLectureProps = {
    lecture: Lecture,
}
const EditLecture: React.FC<EditLectureProps> = ({ lecture }) => {
    const [lectureTitle, setTitle] = useState<string>(lecture.lectureTitle || "")
    const [videoUrl, setVideoUrl] = useState<File | string | null>(lecture.lectureVideoUrl || null)
    const [isFree, setIsFree] = useState<boolean>(lecture.isFree || false)

    const [formState, formAction, isPending] = useActionState(editLecture.bind(null, lecture.id, lecture.courseId), { errors: {} })

    const fileSeleceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null
        if (file?.type.startsWith("video/")) {
            setVideoUrl(file)
        }
    }

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!(videoUrl instanceof File)) return

        const formData = new FormData()
        formData.append("lecturetitle", lectureTitle)
        formData.append("lecturevideo", videoUrl)
        formData.append("lectureisfree", JSON.stringify(isFree))

        startTransition(() => (
            formAction(formData)
        ))

    }


    return (
        <div className='ml-6 mt-4 px-2'>
            <div className='flex items-center space-x-3'>
                <Link href={'/admin/course/id/lecture'}>
                    <MoveLeft className='bg-black rounded-full p-4 text-white' size={'50px'} />
                </Link>
                <h1 className='font-bold text-2xl'>Update Your Lecture</h1>
            </div>


            <Card className='mt-3 shadow-2xl'>
                <CardHeader>
                    <RemoveLecture lecture={lecture} />
                </CardHeader>

                <CardContent>
                    <form onSubmit={formSubmitHandler}>
                        <div className='my-5 space-y-4'>
                            <div>
                                <Label>Lecture Title</Label>
                                <Input
                                    type='text'
                                    className='focus-visible:ring-0 px-2'
                                    placeholder='Ex. Set up vs Code'
                                    value={lectureTitle}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div>
                                <Label>Video <span className='text-red-600'>*</span></Label>
                                <Input
                                    type='file'
                                    onChange={fileSeleceHandler}
                                />
                                {
                                    lecture.lectureVideoUrl && (
                                        <div className='w-60 h-60 relative'>
                                            <ReactPlayer
                                                url={lecture.lectureVideoUrl} // public folder me rakha hua video
                                                controls
                                                width='100%'
                                                height='100%'
                                            />
                                        </div>

                                    )
                                }
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <div className="flex items-center space-x-2">
                                <Switch id="video" checked={isFree} onCheckedChange={setIsFree} />
                                <Label htmlFor="video">Free</Label>
                            </div>
                            {
                                isPending ? (<Button><Loader2 className='w-4 h-4 animate-spin' />Pleaase wait...</Button>) : (
                                    <Button type='submit'>Upload Lecture</Button>
                                )
                            }
                        </div>
                    </form>

                </CardContent>



            </Card>

        </div>
    )
}

export default EditLecture