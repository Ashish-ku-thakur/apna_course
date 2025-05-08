
import { getLectureById } from '@/actions/get-lecture-by-id'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import ReactPlayer from 'react-player'

type LectureVideoPageParams = {
    params: Promise<{ lectureId: string }>
}
const page: React.FC<LectureVideoPageParams> = async ({ params }) => {
    const { lectureId } = await params
    console.log("lectureId->", lectureId);

    // if (!lectureId) return
    // const lecture = await getLectureById(lectureId)

    // if (!lecture) return
    // console.log("lecture->", lecture);


    return (
        <section className="flex-1 p-4 rounded-lg">
            <Card>
                <CardHeader className="relative pb-[56.25%]">
                    <ReactPlayer
                        // url={lecture?.lectureVideoUrl || ""}
                        url={""}
                        controls
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                </CardHeader>

                <CardContent>
                    <Separator className="my-4 bg-black h-[1px]" />
                    <h2 className="text-xl font-semibold">
                        {/* {lecture.lectureTitle} */}
                        ASHISH
                    </h2>
                </CardContent>
            </Card>
        </section>
    )
}

export default page