import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const arr = ["Html", "Css", "Javascript", "Java", "Python", "Data-science", "Database", "Mern-stack", "Full-stack"]
  return (
    <div className='ml-8 mt-4 pr-4'>
      <h1 className='font-bold text-xl'>Result For {'Html'}</h1>
      <p className='text-sm'>Showing Result For Html</p>

      <div className='mt-6 flex gap-8'>

        <div className='min-w-[300px]'>
          <div className='flex items-center justify-between'>
            <Label className='font-bold text-xl'>Filter Options</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='sort by' />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Price</SelectLabel>
                  <SelectItem value='Low' className='p-2' >Low to High</SelectItem>
                  <SelectItem value='High' className='p-2' >High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Separator className='bg-black my-3' />

          <div className=''>
            <p>Category</p>
            <div>
              {
                arr.map((ele, idx) => (
                  <div key={idx} className='flex items-center gap-3 mt-4'>
                    <Checkbox id={ele} />
                    <label
                      htmlFor={ele}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {ele}
                    </label>
                  </div>
                ))
              }

            </div>
          </div>
        </div>

        <div className='flex-1 grid grid-cols-1'>
          <div>
            <div className='flex  gap-3'>
              <div className='relative h-32 w-52 rounded-md'>
                <Image
                  fill
                  className='object-cover rounded-md py-0 my-0 overflow-hidden'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
                  alt='course-image'
                />
              </div>

              <div className='flex justify-between flex-1 '>
                <div className='flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <h4 className='font-bold text-xl'>Course Title</h4>
                    <p>Course Subtitle</p>
                  </div>

                  <div className='space-y-2'>
                    <p>Instructor: <span>Ashish Kumar Thakur</span></p>
                    <Badge>Biggner</Badge>
                  </div>
                </div>

                <h4 className='flex items-center'><span className='mr-2'>Course Price:</span> <IndianRupee size={'16px'} /> <span className='flex items-center font-semibold'>5</span></h4>

              </div>
            </div>

            <Separator className='bg-black my-3' />
          </div>

          <div>
            <div className='flex  gap-3'>
              <div className='relative h-32 w-52 rounded-md'>
                <Image
                  fill
                  className='object-cover rounded-md py-0 my-0 overflow-hidden'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5K08rKxUEHZsgxTHElnQc6bFEmuVzD6FUg&s'
                  alt='course-image'
                />
              </div>

              <div className='flex justify-between flex-1 '>
                <div className='flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <h4 className='font-bold text-xl'>Course Title</h4>
                    <p>Course Subtitle</p>
                  </div>

                  <div className='space-y-2'>
                    <p>Instructor: <span>Ashish Kumar Thakur</span></p>
                    <Badge>Biggner</Badge>
                  </div>
                </div>

                <h4 className='flex items-center'><span className='mr-2'>Course Price:</span> <IndianRupee size={'16px'} /> <span className='flex items-center font-semibold'>5</span></h4>

              </div>
            </div>

            <Separator className='bg-black my-3' />
          </div>

        </div>

        
      </div>
    </div>
  )
}

export default page