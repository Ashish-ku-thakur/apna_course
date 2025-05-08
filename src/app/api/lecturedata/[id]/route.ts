// src/app/api/lecture/[id]/route.ts

import prisma from "@/lib/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // const { lectureId } = await req.json();
    // console.log("lectureId->", lectureId);
    const { id } = await params;

    if (!id) return;

    const lecture = await prisma.lecture.update({
      where: { id },
      data: {
        viewd: true,
      },
    });

    if (!lecture) {
      return NextResponse.json({ error: "Lecture not found" }, { status: 404 });
    }

    return NextResponse.json(lecture);
  } catch (error) {
    console.error("Error fetching lecture:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// type Ch = {
//   params: Promise<{ id: string }>;
// };
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const {id} =await params;
//     console.log("lectureId ->", id);
//     // your logic here
//   } catch (error) {
//     // handle error
//   }
// }
