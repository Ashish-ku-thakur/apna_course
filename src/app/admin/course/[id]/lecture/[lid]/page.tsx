import EditLecture from '@/components/admin/lecture/EditLecture'
import prisma from '@/lib/prisma-client'

type LectureIdPageParams = {
  params: Promise<{ lid: string }>
}
const page: React.FC<LectureIdPageParams> = async ({ params }) => {

  const ids = await params

  const lecture = await prisma.lecture.findUnique({
    where: {
      id: ids.lid
    }
  })

  if (!lecture) {
    return <div>Lecture Not Found</div>
  }
  return (
    <div>
      <EditLecture lecture={lecture} />
    </div>
  )
}

export default page