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
        <div className='bg-gradient-to-b from-indigo-600 to bg-violet-600 w-full text-center text-white'>
            <h1 className=' text-3xl font-bold py-5'>Finding The Best Courses For You</h1>
            <p className='text-xl pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, error!</p>


            <form onSubmit={formSubmitHandler} className='mx-auto w-2xl flex items-center'>
                <Input
                    type='text'
                    placeholder='Search here...'
                    className='rounded-l-full bg-white text-black'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />

                <Button type='submit' className='rounded-r-full'>Search</Button>
            </form>

            <Link href={`/admin/course/search?query`}>
                <Button variant={'secondary'} className='rounded-full my-14'>Elplore Courses</Button>
            </Link>
        </div>
    )
}

export default HeroSection