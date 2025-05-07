import { ChartNoAxesCombined, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
    return (
        <div className=''>
            <div className='space-y-3 cursor-pointer'>

                <Link href={'/admin/dashboard'} className='flex items-center gap-4'>
                    <ChartNoAxesCombined />
                    <p>DashBoard</p>

                </Link>

                <Link href={'/admin/course'} className='flex items-center gap-4'>
                    <GraduationCap />
                    <p>Courses</p>

                </Link>

            </div>

        </div>
    )
}

export default LeftSideBar