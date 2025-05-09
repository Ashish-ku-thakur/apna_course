"use server";
import prisma from "@/lib/prisma-client";

const filterSearch = async (
  query: string,
  sort: string,
  category: string[]
) => {
  console.log("req", query, sort, category);

    const searchCourses = await prisma.course.findMany({
      where: {
        OR: [
          {
            courseTitle: {
              startsWith: query,
              mode: "insensitive", // partial match
            },
          },
          {
            courseCategory: {
              in: category.length > 0 ? category : undefined,
            },
          },
        ],

      },
      orderBy: {
        coursePrice: sort === "High" ? "desc" : "asc",
      },

      include:{
          creator:{
              select:{
                  name:true
              }
          }
      }
    });

//   const searchCourses = await prisma.course.findMany({
//     where: {
//       courseTitle: {
//        startsWith:query,
//        mode:"insensitive"
//       },
//     },
//     include: {
//       creator: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });
  if (!searchCourses) return [];
  console.log("searchCourses->", searchCourses);

  return searchCourses;
};

export default filterSearch;
