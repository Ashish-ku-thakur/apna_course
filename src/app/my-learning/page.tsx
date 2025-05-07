import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <h1 className='mt-4 font-bold text-3xl mb-8'>My learning</h1>
      <Link href={'course-detail/123'} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <Card className='border-black border-2 py-0 my-0'>
          <CardHeader className='relative h-48 w-full'>
            <Image
              fill
              className='object-cover rounded-md py-0 my-0'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
              alt='course-image'
            />

          </CardHeader>
          <CardContent className=' gap-3'>
            <h3 className='font-medium text-lg mb-3'>HTML</h3>
            <div className='flex items-center justify-between my-4'>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage
                    src='https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid&w=740'
                    alt='user-avatar'
                  />
                  <AvatarFallback>UA</AvatarFallback>
                </Avatar>

                <h3 className='font-medium text-sm'>Ashish kumar</h3>
              </div>

              <div className=''>
                <Badge className='rounded-full bg-violet-500'>Biggner</Badge>
              </div>
            </div>

            <p className='flex items-center'>  <span><IndianRupee size={'16px'} /></span>23</p>


          </CardContent>
        </Card>


      </Link>
    </div>
  )
}

export default page