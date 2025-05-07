'use client'
import editCourse from '@/actions/edit-course'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Course } from '@/generated/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { startTransition, useActionState, useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import DOMPurify from "dompurify"
import PublishCourse from './courseId/publish/PublishCourse'

type CourseEditProps = {
    courseId: string,
    course: Course
}

const CourseEdit: React.FC<CourseEditProps> = ({ courseId, course }) => {
    const [courseTitle, setTitle] = useState(course.courseTitle);
    const [courseSubtitle, setSubtitle] = useState(course.courseSubtitle || "")
    const [courseCategory, setCategory] = useState(course.courseCategory || "")
    const [courseLevel, setLevel] = useState(course.courseLevel)
    const [coursePrice, setPrice] = useState(course.coursePrice?.toString() || "")
    const [courseThumbnail, setThumbnail] = useState<string | File | null>(course.courseThumbnail || null)
    const [courseDescription, setDescription] = useState(course.courseDescription || "")
    const [tempUrl, setTempurl] = useState("")

    const [formState, formAction, isPending] = useActionState(editCourse.bind(null, courseId), { errors: {} })

    const courseThumbnailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file?.type.startsWith("image/")) {
            setThumbnail(file);

            const tempImageUrl = URL.createObjectURL(file);
            setTempurl(tempImageUrl);

        } else {
            console.warn("Please select a valid image file.");
        }
    };

    const editCourseHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("coursetitle", courseTitle);
        formData.append("coursesubtitle", courseSubtitle);
        formData.append("coursedescription", courseDescription);
        formData.append("coursecategory", courseCategory);
        formData.append("courselevel", courseLevel);
        formData.append("courseprice", coursePrice);
        // ✅ Only append if file is NOT null
        if (courseThumbnail instanceof File) {
            formData.append("coursethumbnail", courseThumbnail);
        }
        startTransition(() => (
            formAction(formData)
        ))
    }
    const arr = ["Redis", 'Mongo', "Kubernatish", 'Kafka', 'Docker', 'Socket', 'Fullstack', 'Mernstack', 'Javascript', 'Html', 'Css']
    const level = ["BIGGNER", "MEDIUM", "ADVANCE"]


    return (
        <div className=''>
            <form onSubmit={editCourseHandler}>
                {/* <CardHeader> */}
                {/* <PublishCourse courseId={courseId} /> */}
                {/* </CardHeader> */}
                <Card className=''>

                    <CardContent>
                        <div className='space-y-5'>
                            <div>
                                <Label>Course Title</Label>
                                <Input
                                    type='text'
                                    className='focus-visible:ring-0'
                                    placeholder='Enter The Course Title'
                                    name='coursetitle'
                                    value={courseTitle}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                {
                                    formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseTitle}</p>
                                }
                            </div>

                            <div>
                                <Label>Course Subtitle</Label>
                                <Input
                                    type='text'
                                    name='subtitle'
                                    value={courseSubtitle}
                                    onChange={(e) => setSubtitle(e.target.value)}
                                    className='focus-visible:ring-0'
                                    placeholder='Ex. Become a Fullstack Developer From Zero To Hero'
                                />
                                {
                                    formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseSubtitle}</p>
                                }
                            </div>

                            <Label>Course Description</Label>
                            <ReactQuill theme="snow" value={courseDescription} onChange={setDescription}>{<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(courseDescription) }} />}</ReactQuill>

                            {
                                formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseDescription}</p>
                            }
                        </div>
                    </CardContent>

                    <CardFooter>
                        <div className='flex flex-col space-y-4'>

                            <div className='flex items-center gap-4'>
                                <div>
                                    <Label>Category</Label>
                                    <Select onValueChange={(val) => setCategory(val)} defaultValue={courseCategory}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='select category' />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>category</SelectLabel>
                                                {
                                                    arr.map((ele, index) => (
                                                        <SelectItem className='p-2' key={index} value={ele}>{ele}</SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>

                                    {
                                        formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.courseCategory}</p>
                                    }
                                </div>

                                <div>
                                    <Label>Course Level</Label>
                                    <Select onValueChange={(val) => setLevel(val as "BIGGNER" | "MEDIUM" | "ADVANCE")} defaultValue={courseLevel}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='select level' />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>level</SelectLabel>
                                                {
                                                    level.map((ele, index) => (
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

                                <div>
                                    <Label>Course Price in Inr</Label>
                                    <Input
                                        type='number'
                                        name='courseprice'
                                        value={coursePrice}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className='focus-visible:ring-0'
                                        placeholder='Ex. 199'
                                    />

                                    {
                                        formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.coursePrice}</p>
                                    }
                                </div>
                            </div>

                            <div className='my-3 space-y-3'>
                                <div>

                                    <Label>Course Thumbnail</Label>
                                    <Input
                                        type='file'
                                        name='thumbnail'
                                        onChange={courseThumbnailHandler}

                                    />


                                </div>
                                {(tempUrl && typeof tempUrl === "string") ? (
                                    // ✅ अगर user ने नया thumbnail चुना है, तो वही दिखाओ
                                    <div className='relative w-[300px] h-[200px]'>
                                        <Image
                                            src={tempUrl}
                                            alt='course-thumbnail'
                                            fill
                                            className='object-cover rounded-md'
                                        />
                                    </div>
                                ) : (
                                    // ✅ अगर tempUrl नहीं है, लेकिन course में पहले से thumbnail है तो वो दिखाओ
                                    course.courseThumbnail && (
                                        <div className='relative w-[300px] h-[200px]'>
                                            <Image
                                                src={course.courseThumbnail as string}
                                                alt='course-thumbnail'
                                                fill
                                                className='object-cover rounded-md'
                                            />
                                        </div>
                                    )
                                )}

                                <div className='space-x-3'>
                                    <Button onClick={() => redirect("/admin/course")}>Cencil</Button>
                                    {
                                        isPending ? (<Button type='submit'>Loading...</Button>) : (<Button disabled={isPending} type='submit'>Save</Button>)
                                    }

                                </div>
                            </div>
                        </div>

                    </CardFooter>

                </Card>

                {
                    formState && <p className='text-red-500 my-2 text-sm'>{formState.errors.formErrors}</p>
                }
            </form>
        </div >
    )
}

export default CourseEdit