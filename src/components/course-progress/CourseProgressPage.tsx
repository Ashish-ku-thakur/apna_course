// ✅ Client Component (app/components/CourseProgressPage.tsx)
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardHeader } from '../ui/card';
import ReactPlayer from 'react-player';
import { LocateFixed } from 'lucide-react';
import { Button } from '../ui/button';
import viewdLecture from '@/actions/viewd-lecture';
import { LectureProgress, Prisma } from '@/generated/prisma';

type CourseProgressPageProps = {
  course: Prisma.CourseGetPayload<{
    include: {
      Lecture: {
        include: {
          LectureProgress: true
        }
      }
    }
  }>
};

const CourseProgressPage: React.FC<CourseProgressPageProps> = ({ course }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lectureId = searchParams.get('lectureId');
  const firstLecture = course.Lecture[0];
  const [lectureData, setLectureData] = useState<LectureProgress | null>(null);

  useEffect(() => {
    if (!lectureId && firstLecture?.id) {
      router.replace(`/course-progress/${course.id}/lecture?lectureId=${firstLecture.id}`);
    }
  }, [lectureId, firstLecture?.id, course.id, router]);

  useEffect(() => {
    if (!lectureId) return;
    const fetchUpdatedLecture = async () => {
      const data = await viewdLecture(lectureId, course.id);
      setLectureData(data as LectureProgress);
    };
    fetchUpdatedLecture();
  }, [lectureId]);

  const handleLectureClick = async (id: string) => {
    router.push(`/course-progress/${course.id}/lecture?lectureId=${id}`);
    const data = await viewdLecture(id, course.id);
    setLectureData(data as LectureProgress);
  };

  const selectedLecture = course.Lecture.find(lecture => lecture.id === lectureId) || firstLecture;
  console.log("course->", course);


  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between my-5 px-4">
        <div>
          <p className="font-bold text-2xl">{course.courseTitle}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4">
        {/* Video Section */}
        <section className="flex-1 p-4 rounded-lg">
          <Card>
            <CardHeader className="relative pb-[56.25%]">
              <ReactPlayer
                url={selectedLecture?.lectureVideoUrl || ""}
                controls
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </CardHeader>
            <CardContent>
              <Separator className="my-4 bg-black h-[1px]" />
              <h2 className="text-xl font-semibold">{selectedLecture?.lectureTitle}</h2>
            </CardContent>
          </Card>
        </section>

        {/* Lecture List Section */}
        <div className="hidden md:block">
          <Separator orientation="vertical" className="h-full bg-black w-[2px]" />
        </div>

        <section className="w-full md:w-[30%] p-4 rounded-lg">
          <div className="text-lg font-medium">
            <h2>Course Lectures</h2>
            <div className="my-4 space-y-2">
              {course.Lecture.map((lecture) => {
                return (
                  <ul
                    key={lecture.id}
                    onClick={() => handleLectureClick(lecture.id)}
                    className={`flex items-center justify-between p-3 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition ${lecture.id === lectureId && "bg-gray-400"}`}
                  >
                    <li className="flex items-center gap-2 truncate max-w-[220px]">
                      <LocateFixed size={16} />
                      {lecture.lectureTitle}
                    </li>
                    <span
                      className='text-green-400'
                    >
                      {/* {lecture.viewed ? "watched" : "unwatched"} */}
                      {lecture.LectureProgress[0] ?lecture.LectureProgress[0].viewed ?"watched":"unwatched" :lecture.LectureProgress && "unwatched" }
                    </span>
                  </ul>
                );
              })}

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseProgressPage;
