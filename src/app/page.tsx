import HeroSection from "@/components/home/HeroSection";
// import Navbar from "@/components/home/Navbar";
import OurCourses from "@/components/home/OurCourses";
import prisma from "@/lib/prisma-client";

export default async function Home() {
  const courses = await prisma.course.findMany({
    where: {
      coursePublished: true
    },
    include: {
      creator: {
        select: {
          name: true,
          imageurl: true
        }
      }
    }
  })

  if (!courses) return []
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <OurCourses courses={courses} />
    </div>

  );
}
