'use client';

import { Lecture, Prisma } from '@/generated/prisma';
import CourseReactPlayer from './CourseReactPlayer';
import { Card, CardContent, CardHeader } from '../ui/card';
import { LocateFixed } from 'lucide-react';
import { useEffect, useState, startTransition } from 'react';
import { useAuth } from '@clerk/nextjs';
import { getLectureById } from '@/actions/get-lecture-by-id';

type CourseDescriptionProps = {
  course: Prisma.CourseGetPayload<{
    include: {
      creator: { select: { name: true } };
      Lecture: true;
      enrolledUsers: {
        include: {
          user: true;
        };
      };
      Payment: true;
    };
  }>;
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
  const [lectureId, setLectureId] = useState(course.Lecture[0]?.id ?? '');
  const [lectureData, setLectureData] = useState<Lecture | "">("");
  const { userId } = useAuth();

  useEffect(() => {
    if (!lectureId) return;
    startTransition(async () => {
      const data = await getLectureById(lectureId);
      if (data) setLectureData(data);
    });
  }, [lectureId]);

  const isUserEnrolled = course.enrolledUsers.some(
    (enrolled) => enrolled.user.clerkId === userId && enrolled.status === 'PAID'
  );

  const handleLectureIdChange = (lecId: string) => {
    if (lecId === lectureId) return;
    setLectureId(lecId);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left: Description + Lecture List */}
        <section className='space-y-6'>
          <div className='space-y-2'>
            <h2 className='text-xl sm:text-2xl font-semibold'>Description</h2>
            <h3 className='text-base sm:text-lg text-gray-700'>{course.courseTitle}</h3>
          </div>

          <Card className='shadow-sm'>
            <CardHeader>
              <h2 className='text-lg font-medium'>Course Content</h2>
              <p className='text-sm text-gray-500'>{course.Lecture.length} Lectures</p>
            </CardHeader>

            <CardContent className='space-y-2'>
              {course.Lecture.map((lecture) => {
                const isDisabled = !(isUserEnrolled || lecture.isFree);
                return (
                  <button
                    key={lecture.id}
                    type='button'
                    onClick={() => handleLectureIdChange(lecture.id)}
                    disabled={isDisabled}
                    className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md text-sm transition-all
                      ${isDisabled
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-gray-100 cursor-pointer border border-gray-200'}
                    `}
                  >
                    <div className='flex items-center gap-2 truncate'>
                      <LocateFixed size={16} />
                      <span className='truncate'>{lecture.lectureTitle}</span>
                    </div>
                    <span className={`text-xs font-medium ${lecture.isFree ? 'text-green-600' : 'text-yellow-500'}`}>
                      {lecture.isFree ? 'Free' : 'Paid'}
                    </span>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </section>

        {/* Right: React Player */}
        <section>
          <CourseReactPlayer
            lectureData={lectureData}
            course={course}
            isUserEnrolled={isUserEnrolled}
          />
        </section>
      </div>
    </div>
  );
};

export default CourseDescription;
