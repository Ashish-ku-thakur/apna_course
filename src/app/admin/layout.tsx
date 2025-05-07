import LeftSideBar from '@/components/admin/sidebar/LeftSideBar';
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className='flex'>
            <div className='w-80 bg-gray-200 border py-3 px-8 h-screen fixed top-16 left-0 '>
                <LeftSideBar />
            </div>
            <div className='flex-1 ml-80'>
                {children}
            </div>
        </div>
    )
}

export default layout