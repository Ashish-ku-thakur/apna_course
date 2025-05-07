'use client';
import { Lecture, Prisma } from '@/generated/prisma';
import CourseReactPlayer from './CourseReactPlayer';
import { Card, CardContent, CardHeader } from '../ui/card';
import { LocateFixed } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getLectureById } from '@/actions/get-lecture-by-id';

type CourseDescriptionProps = {
    course: Prisma.CourseGetPayload<{
        include: {
            creator: { select: { name: true } },
            Lecture: true,
        },
    }>,
};

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
    const [lectureId, setLectureId] = useState(course.Lecture[0]?.id ?? '');
    const [lectureData, setLectureData] = useState<Lecture | "">("")

    useEffect(() => {
        if (!lectureId) return;

        const fetchLecture = async () => {
            const res = await fetch(`/api/lecture/${lectureId}`)

            const data = await res.json();
            setLectureData(data)
        };

        fetchLecture();
    }, [lectureId]);


    // useEffect(() => {
    //         if (!lectureId) return;
    
    //         const fetchLecture = async () => {
    //             const res = await fetch(`/api/lecture/${lectureId}`, {
    //                 method: "GET",
    //                 // headers: { "Content-Type": "application/json" },
    //                 // body: JSON.stringify({ lectureId:lectureId })
    //             })
    
    //             const data = await res.json();
    //             setLectureData(data)
    //         };
    
    //         fetchLecture();
    //     }, [lectureId]);


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
                                className="flex items-center justify-between w-full text-left cursor-pointer"
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
                <CourseReactPlayer lectureData={lectureData} />
            </section>
        </div>
    );
};

export default CourseDescription;
