'use client'
import createCourse from '@/actions/create-course'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useActionState, useState } from 'react'

const page = () => {
    const [courseTitle, setTitle] = useState("")
    const [courseLevel, setLevel] = useState("")
    const arr = ['BIGGNER', 'MEDIUM', 'ADVANCE']

    const [formState, formAction, isPending] = useActionState(createCourse, { errors: {} })

    

    return (
        <div className='ml-12 mt-4 max-w-5xl'>
            <h1 className='font-bold text-2xl'>Let's add course & some basic course details</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, voluptas</p>

            <form
                action={formAction}
                className='mt-4 space-y-5'>
                <div>
                    <Label className='text-sm'>CourseTitle</Label>
                    <Input
                        type='text'
                        name='coursetitle'
                        placeholder='Enter The Course Title'
                        className='p-2 focus-visible:ring-1'
                        value={courseTitle}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {
                        formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseTitle}</p>
                    }
                </div>
                <div className='space-y-1'>
                    <Label className='text-sm'>Course Level</Label>
                    <Select onValueChange={(value) => setLevel(value)} name='courselevel'>
                        <SelectTrigger>
                            <SelectValue placeholder='select level' />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Level</SelectLabel>
                                {
                                    arr.map((ele, index) => (
                                        <SelectItem className='p-2' key={index} value={ele}>{ele}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {
                        formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseLevel}</p>
                    }
                </div>

                <div className='space-x-2'>
                    <div className='flex items-center space-x-3'>

                        <Button className='bg-black rounded-full p-4 text-white '>
                            <Link href={'/admin/course'} className='flex items-center gap-1'>
                                <MoveLeft className='' size={'50px'} />
                                <p>Back</p>
                            </Link>
                        </Button>
                        {
                            isPending ? (<Button disabled={isPending} type='submit' className='bg-green-400 hover:bg-green-500'>
                                {/* <Link href={'/admin/course'}> */}
                                Loading...
                                {/* </Link> */}
                            </Button>) : (
                                <Button type='submit' className='bg-green-400 hover:bg-green-500'>
                                    {/* <Link href={'/admin/course'}> */}
                                    Create
                                    {/* </Link> */}
                                </Button>
                            )
                        }

                    </div>

                </div>

                {
                    formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.formErrors}</p>
                }
            </form>

        </div>
    )
}

export default page