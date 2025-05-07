"use server";

import prisma from "@/lib/prisma-client";
import Razorpay from "@/lib/razorpay.config";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const createOrder = async (courseId: string) => {
  try {
    const user = await currentUser();
    if (!user) return { error: "Unauthorized" };

    const findUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });
    if (!findUser) return { error: "User not found" };

    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });
    if (!course) return { error: "Course not found" };

    const options = {
      amount: Number(course.coursePrice) * 100, // in paisa
      currency: "INR",
      receipt: `receipt-${course.courseTitle}-${Date.now()}`,
      notes: {
        courseId,
        userId: findUser.id,
      },
    };

    const order = await Razorpay.orders.create(options);

    // ✅ Save the order temporarily in DB (optional, helps with future reconciliation)
    await prisma.enrolledCourse.create({
      data: {
        courseAmount: course.coursePrice as string,
        status: "CREATED",
        courseId: courseId,
        userId: findUser.id,
      },
    });
    revalidatePath(`course-detail/${courseId}`);

    return {
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      courseName: course.courseTitle,
      userName: findUser.name,
      userEmail: user.emailAddresses[0]?.emailAddress,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Razorpay Order Error:", error.message);
      return { error: "Something went wrong inside if" };
    } else {
      return { error: "Something went wrong" };
    }
  }
};

export default createOrder;
