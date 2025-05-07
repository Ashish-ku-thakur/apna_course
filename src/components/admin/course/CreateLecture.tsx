'use client'
import createLecture from '@/actions/create-lecture'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, SquarePen } from 'lucide-react'
import React, { useActionState, useState } from 'react'
import ShowLectures from './ShowLectures'
import Link from 'next/link'

type CreateLectureProps = {
    courseId: string
}
const CreateLecture: React.FC<CreateLectureProps> = ({ courseId }) => {
    const [lectureTitle, setTitle] = useState<string>("")

    const [formState, formAction, isPending] = useActionState(createLecture.bind(null, courseId), { errors: {} })

    return (
        <div className='px-8 mt-4'>
            <div className='mb-5'>
                <h1 className='font-bold text-2xl'>Let's Add Lecture, add Some Basic Course Details For Your New Lecture</h1>
                <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, reiciendis.</p>
            </div>

            <form
                action={formAction}
            >
                <Label>Lecture Title</Label>
                <Input
                    placeholder='Ex. Introduction of HTML'
                    type='text'
                    name='lecturetitle'
                    value={lectureTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {
                    isPending ? (<Button className='bg-green-400 hover:bg-green-500'>
                        <Loader2 className='w-4 h-4 animate-spin' />Please wait...
                    </Button>
                    ) : (
                        <div className='mt-4 space-x-3'>
                            <Button>Back to Course</Button>
                            <Button className='bg-green-400 hover:bg-green-500' type='submit' >Create Lecture</Button>
                        </div>
                    )
                }

            </form>

          
        </div>
    )
}

export default CreateLecture