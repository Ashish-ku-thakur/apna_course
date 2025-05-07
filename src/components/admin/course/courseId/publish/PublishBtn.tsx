'use client'
import publishCourse from '@/actions/publish-course'
import unPublishCourse from '@/actions/unpublish-course'
import { Button } from '@/components/ui/button'
import { Course, Lecture } from '@/generated/prisma'
import { Loader2 } from 'lucide-react'
import React, { useActionState } from 'react'


type PublishBtnProps = {
    lectures: Lecture[],
    course: Course
}
const PublishBtn: React.FC<PublishBtnProps> = ({ lectures, course }) => {
    const actions = course.coursePublished ? unPublishCourse.bind(null, course.id) : publishCourse.bind(null, course.id)
    const [formState, formAction, isPending] = useActionState(actions, {})
    return (
        <form action={formAction}>
            {
                isPending ? (<Button><Loader2 className='w-4 h-4 animate-spin' />Please wait...</Button>) : (

                    <Button disabled={lectures.length <= 0} className='bg-green-400 hover:bg-green-500'>
                        {course.coursePublished ? "UnPublished" : "Published"}
                    </Button>
                )
            }
        </form>
    )
}

export default PublishBtn