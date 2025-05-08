'use client'
import { Prisma } from '@/generated/prisma'
import { LocateFixed } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type CourseProgressRightSectionProps = {
    course: Prisma.CourseGetPayload<{
        include: {
            // creator: { select: { name: true } },
            Lecture: true,
            // enrolledUsers: {
            //     include: {
            //         // course: true,
            //         user: true // ✅ pure user object milega
            //     }
            // },
            // Payment: true
        }
    }>;
    handleLecture: (data: unknown) => void
}
const CourseProgressRightSection: React.FC<CourseProgressRightSectionProps> = ({ course }) => {
    const [lectureId, setLectureId] = useState(course.Lecture[0]?.id ?? '')
    // const [lectureData, setLectureData] = useState<Lecture | "">("")

    useEffect(() => {
        if (!lectureId) return;

        const fetchLecture = async () => {
            const res = await fetch(`/api/lecture/${lectureId}`)

            const data = await res.json();
            // setLectureData(data)
            // handleLecture(data)
            console.log(data);
            
        };

        fetchLecture();
    }, [lectureId]);
    return (
   <div>
    
   </div>
    )
}

export default CourseProgressRightSection