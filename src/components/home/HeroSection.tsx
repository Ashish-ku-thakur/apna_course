'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const HeroSection = () => {
    const [inputData, setInputData] = useState<string>("")

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        redirect(`/admin/course/search?query=${inputData}`)
    }

    return (
        <div className='bg-gradient-to-b from-indigo-600 to-violet-600 w-full text-center text-white px-4 py-10'>
            <h1 className='text-2xl md:text-4xl font-bold py-4'>Finding The Best Courses For You</h1>
            <p className='text-base md:text-xl mb-6 max-w-2xl mx-auto'>
                Unlock your potential with expertly crafted courses designed to accelerate your success
            </p>

            <form
                onSubmit={formSubmitHandler}
                className='flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto w-full gap-2 sm:gap-0'
            >
                <Input
                    type='text'
                    placeholder='Search here...'
                    className='rounded-full sm:rounded-l-full sm:rounded-r-none bg-white text-black w-full sm:w-auto flex-1'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />

                <Button
                    type='submit'
                    className='rounded-full sm:rounded-l-none sm:rounded-r-full w-full sm:w-auto'
                >
                    Search
                </Button>
            </form>

            <Link href={`/admin/course/search?query`} className='block mt-10'>
                <Button variant='secondary' className='rounded-full'>
                    Explore Courses
                </Button>
            </Link>
        </div>
    )
}

export default HeroSection
