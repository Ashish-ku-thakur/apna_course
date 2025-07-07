 'use client'

import filterSearch from '@/actions/search/search-action'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Prisma } from '@/generated/prisma'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [sort, setSort] = useState<string>('')
  const [category, setCategory] = useState<string[]>([])
  const [query, setQuery] = useState<string>('')
  const [data, setData] = useState<Prisma.CourseGetPayload<{
    include: { creator: { select: { name: true } } }
  }>[] | []>([])
  const [isPending, startTransition] = useTransition()

  const categoryOptions = [
    'Html', 'Css', 'Javascript', 'Java', 'Python',
    'Data-science', 'Database', 'Mern-stack', 'Full-stack',
  ]

  // Sync state from URL on page load
  useEffect(() => {
    const queryParam = searchParams.get('query') || ''
    const sortParam = searchParams.get('sort') || ''
    const categoryParam = searchParams.get('category') || ''

    setQuery(queryParam)
    setSort(sortParam)
    setCategory(categoryParam ? categoryParam.split(',') : [])

    startTransition(async () => {
      const result = await filterSearch(queryParam, sortParam, categoryParam.split(","))
      setData(result)
    })
  }, [searchParams])



  const handleCheckboxChange = (checked: boolean, value: string) => {
    const updatedCategories = checked
      ? [...category, value]
      : category.filter((item) => item !== value)

    setCategory(updatedCategories)

    const params = new URLSearchParams(searchParams.toString())

    const queryParam = searchParams.get('query') || ''
    const sortParam = searchParams.get('sort') || ''
    // const categoryParam = searchParams.get('category') || ''

    if (query) params.set('query', queryParam)
    if (sort) params.set('sort', sortParam)
    if (updatedCategories.length) {
      params.set('category', updatedCategories.join(','))
    } else {
      params.delete('category')
    }

    router.push(`/admin/course/search?${params.toString()}`)

    startTransition(async () => {
      const result = await filterSearch(query, sort, updatedCategories)
      setData(result)
    })
  }

  const handleSortChange = (value: string) => {
    setSort(value)

    const params = new URLSearchParams(searchParams.toString())
    const queryParam = searchParams.get('query') || ''
    // const sortParam = searchParams.get('sort') || ''
    const categoryParam = searchParams.get('category') || ''

    if (query) params.set('query', queryParam)
    if (category.length) params.set('category', categoryParam)
    params.set('sort', value)

    router.push(`/admin/course/search?${params.toString()}`)

    startTransition(async () => {
      const result = await filterSearch(query, value, category)
      setData(result)
    })
  }

  // console.log("data->", data);


  return (
  <div className="px-4 py-6 md:px-8">
    <h1 className="font-bold text-xl">Result For {query || '...'}</h1>
    <p className="text-sm text-gray-600">Showing Result For {query || '...'}</p>

    <div className="mt-6 flex flex-col md:flex-row gap-6">
      {/* 🔷 Filters */}
      <div className="w-full md:w-[250px]">
        <div className="flex items-center justify-between">
          <Label className="font-bold text-xl">Filter Options</Label>
          <Select onValueChange={handleSortChange} value={sort}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price</SelectLabel>
                <SelectItem value="Low" className="p-2">Low to High</SelectItem>
                <SelectItem value="High" className="p-2">High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Separator className="bg-black my-3" />

        <div>
          <p className="font-medium text-sm">Category</p>
          {categoryOptions.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 mt-4">
              <Checkbox
                id={item}
                checked={category.includes(item)}
                onCheckedChange={(val) =>
                  handleCheckboxChange(Boolean(val), item)
                }
              />
              <label htmlFor={item} className="text-sm font-medium">
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* 🔶 Course Results */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {!isPending && data.map((course) => (
          <div key={course.id} className="flex flex-col gap-4 p-4 border rounded shadow-sm bg-white">
            <div className="relative h-40 w-full rounded-md overflow-hidden">
              <Image
                fill
                className="object-cover"
                src={course.courseThumbnail as string}
                alt="course-image"
              />
            </div>

            <div className="flex flex-col justify-between">
              <h2 className="font-semibold text-lg truncate">{course.courseTitle}</h2>
              <div className="flex items-center gap-2 mt-2 flex-wrap text-sm">
                <Badge variant="outline">{course.courseLevel}</Badge>
                <p className="flex items-center gap-1">
                  <IndianRupee className="h-4 w-4" /> {course.coursePrice}
                </p>
                <p className="text-gray-400">By {course.creator.name}</p>
              </div>
            </div>
          </div>
        ))}

        {!isPending && data.length === 0 && (
          <p className="text-sm text-gray-500 col-span-full">No results found.</p>
        )}
      </div>
    </div>
  </div>
)

}

export default Page
