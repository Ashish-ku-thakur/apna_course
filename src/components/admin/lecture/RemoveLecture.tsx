'use client'
import { removeLecture } from '@/actions/remove-lecture'
import { Button } from '@/components/ui/button'
import { Lecture } from '@/generated/prisma'
import { Loader2 } from 'lucide-react'
import React, { useActionState } from 'react'

type RemoveLectureProps = {
    lecture: Lecture
}

const RemoveLecture: React.FC<RemoveLectureProps> = ({ lecture }) => {
    const [formState, formAction, isPending] = useActionState(removeLecture.bind(null, lecture), {})
    return (
        <form action={formAction} className='flex items-center justify-between '>
            <div>
                <h3 className='font-bold text-xl'>Edit Lecture</h3>

                <p className='text-sm'>Make Change & Click Save When you are Done.</p>
            </div>
            {
                isPending ? (<Button><Loader2 className='w-4 h-4 animate-spin' />Please wait...</Button>) : (
                    <Button
                        type='submit'
                        className='bg-red-400'>Remove Lecture</Button>
                )
            }
        </form>
    )
}

export default RemoveLecture