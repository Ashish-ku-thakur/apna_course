'use server'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import prisma from '@/lib/prisma-client'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const courses = await prisma.course.findMany({})

    return (
        <div className='mx-8 my-4'>
            <Button>
                <Link href={"course/create"}>
                    Create New Course
                </Link>
            </Button>

            <div className='mt-6'>
                {courses.length === 0 ? (
                    <div className='flex items-center justify-center'>
                        <p className='font-bold text-2xl'>There is no any Courses</p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[100px]'>Price</TableHead>
                                <TableHead className='w-[150px]'>Status</TableHead>
                                <TableHead className='w-[250px]'>Title</TableHead>
                                <TableHead className='text-center w-[100px]'>Action</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody className='space-y-2'>
                            {courses.map((course) => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.coursePrice || 'NA'}</TableCell>
                                    <TableCell>
                                        <Badge>{course.coursePublished ? "Published" : "Draft"}</Badge>
                                    </TableCell>
                                    <TableCell className='overflow-hidden truncate max-w-[100px]'>
                                        {course.courseTitle}
                                    </TableCell>
                                    <TableCell className='text-center'>
                                        <Link href={`course/${course.id}`}>
                                            <Button variant="outline" className='cursor-pointer' size="sm">
                                                Edit
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                            }




                        </TableBody>
                    </Table>
                )
                }

            </div>
        </div>
    )
}

export default Page
