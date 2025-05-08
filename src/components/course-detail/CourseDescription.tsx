'use client';
import { Lecture, Prisma } from '@/generated/prisma';
import CourseReactPlayer from './CourseReactPlayer';
import { Card, CardContent, CardHeader } from '../ui/card';
import { LocateFixed } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
// import { getLectureById } from '@/actions/get-lecture-by-id';

type CourseDescriptionProps = {
    course: Prisma.CourseGetPayload<{
        include: {
            creator: { select: { name: true } },
            Lecture: true,
            enrolledUsers: {
                include: {
                    // course:true,
                    user: true // ✅ pure user object milega
                }
            },
            Payment: true
        }
    }>;
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
    const [lectureId, setLectureId] = useState(course.Lecture[0]?.id ?? '');
    const [lectureData, setLectureData] = useState<Lecture | "">("")

    const { userId } = useAuth();

    useEffect(() => {
        if (!lectureId) return;

        const fetchLecture = async () => {
            const res = await fetch(`/api/lecture/${lectureId}`)

            const data = await res.json();
            setLectureData(data)
        };

        fetchLecture();
    }, [lectureId]);
    const isUserEnrolled = course.enrolledUsers.some((enrolled) => enrolled.user.clerkId === userId && enrolled.status === 'PAID');


    return (
        <div className='grid grid-cols-2 gap-10'>
            <section>
                <div className='space-y-3 mb-4'>
                    <h2 className='text-2xl'>Description</h2>
                    <h3>{course.courseTitle}</h3>
                </div>

                <Card>
                    <CardHeader>
                        <h2>Course-content</h2>
                        <h3>{course.Lecture.length} Lectures</h3>
                    </CardHeader>

                    <CardContent className="space-y-2">
                        {course.Lecture.map((lecture) => (
                            <button
                                key={lecture.id}
                                type="button"
                                onClick={() => setLectureId(lecture.id)}
                                disabled={isUserEnrolled || !lecture.isFree}
                                className={`flex items-center justify-between w-full text-left   px-2 py-1 rounded-md ${isUserEnrolled || lecture.isFree
                                    ? 'bg-white hover:bg-gray-100 cursor-pointer'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <div className="flex items-center gap-1">
                                    <LocateFixed size="16px" />
                                    <p>{lecture.lectureTitle}</p>
                                </div>
                                <div>{lecture.isFree ? 'free' : 'paid'}</div>
                            </button>
                        ))}

                    </CardContent>
                </Card>
            </section>

            <section>
                <CourseReactPlayer lectureData={lectureData} course={course} isUserEnrolled={isUserEnrolled}/>
            </section>
        </div>
    );
};

export default CourseDescription;
