'use server'
import CreateLecture from "@/components/admin/course/CreateLecture"
import ShowLectures from "@/components/admin/course/ShowLectures"
import React from "react"

type CreateLecturePageParams = {
    params: Promise<{ id: string }>
}

const page: React.FC<CreateLecturePageParams> = async ({ params }) => {
    const id = (await params).id

    return (
        <div>
            <CreateLecture courseId={id} />
            <div className="space-y-2 px-8 mt-4">
                <ShowLectures courseId={id}/>
            </div>
        </div>
    )
}

export default page