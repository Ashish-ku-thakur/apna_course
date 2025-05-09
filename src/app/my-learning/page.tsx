'use server'
import MyCourses from "@/components/my-learning/MyCourses"
import prisma from "@/lib/prisma-client"
import { currentUser } from "@clerk/nextjs/server"


const page = async () => {
  const user = await currentUser()
  if (!user) return
  const userInDB = await prisma.user.findUnique({
    where: {
      clerkId: user.id
    },
    include:{
      enrolledCourses:{
        include:{
          course:{
            include:{
              creator:true
            }
          }
        }
      }
    }
  })
  if (!userInDB) return


  return (
    <div>
      <MyCourses userInDB={userInDB}/>
    </div>
  )
}

export default page