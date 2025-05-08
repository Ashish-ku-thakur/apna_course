'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import { Card, CardContent, CardHeader } from '../ui/card'
import ReactPlayer from 'react-player'
import { Lecture, Prisma } from '@/generated/prisma'
import { LocateFixed } from 'lucide-react'
import { Button } from '../ui/button'

type CourseProgressPageProps = {
  course: Prisma.CourseGetPayload<{
    include: {
      Lecture: true
    }
  }>
}

const CourseProgressPage: React.FC<CourseProgressPageProps> = ({ course }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lectureId = searchParams.get('lectureId')

  const firstLecture = course.Lecture[0]
  const [lectureData, setLectureData] = useState<Lecture | null>(null)
  // const [startTransition] = useTransition()

  // ✅ Set initial lectureId in URL if missing
  useEffect(() => {
    if (!lectureId && firstLecture?.id) {
      router.replace(
        `/course-progress/${course.id}/lecture?lectureId=${firstLecture.id}`
      )
    }
  }, [lectureId, firstLecture?.id, course.id, router])

  // ✅ Fetch lecture when lectureId changes
  useEffect(() => {
    if (!lectureId) return;

    const fetchLecture = async () => {
      const res = await fetch(`/api/lecture/${lectureId}`)

      const data = await res.json();
      setLectureData(data)
    };

    fetchLecture();
  }, [lectureId]);

  console.log("lectureData->", lectureData);


  // ✅ Handle lecture item click
  const handleLectureClick = (id: string) => {
    router.push(`/course-progress/${course.id}/lecture?lectureId=${id}`)
  }

  const activeLecture = lectureData || firstLecture

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between my-5 px-4">
        <p className="font-bold text-2xl">Course Title</p>
        <Button>Completed</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Left Section - Video */}
        <section className="flex-1 p-4 rounded-lg">
          <Card>
            <CardHeader className="relative pb-[56.25%]">
              <ReactPlayer
                url={activeLecture.lectureVideoUrl!}
                controls
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </CardHeader>
            <CardContent>
              <Separator className="my-4 bg-black h-[1px]" />
              <h2 className="text-xl font-semibold">
                {activeLecture.lectureTitle}
              </h2>
            </CardContent>
          </Card>
        </section>

        {/* Vertical Separator */}
        <div className="hidden md:block">
          <Separator
            orientation="vertical"
            className="h-full bg-black w-[2px]"
          />
        </div>

        {/* Right Section - Lecture List */}
        <section className="w-full md:w-[30%] p-4 rounded-lg">
          <div className="text-lg font-medium">
            <h2>Course Lectures</h2>
            <div className="my-4 space-y-2">
              {course.Lecture.map((lecture) => (
                <ul
                  key={lecture.id}
                  onClick={() => handleLectureClick(lecture.id)}
                  className="flex items-center justify-between p-3 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition"
                >
                  <li className="flex items-center gap-2">
                    <LocateFixed size={16} />
                    {lecture.lectureTitle}
                  </li>
                  <span className="text-sm text-green-400">
                    {lecture.viewd ? 'watched' : 'unwatched'}
                  </span>
                </ul>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CourseProgressPage
