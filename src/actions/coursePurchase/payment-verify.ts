"use server";

import prisma from "@/lib/prisma-client";
import crypto from "crypto";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


const RAZORPAY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const verifyPayment = async (
  razorpay_payment_id: string,
  razorpay_order_id: string,
  razorpay_signature: string,
  courseId: string,
  amo: number
) => {
 
  const amount = amo / 100;
  
  // ✅ Validate Signature
  const generatedSignature = crypto
    .createHmac("sha256", RAZORPAY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const user = await currentUser();
  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!dbUser) return;

  if (generatedSignature !== razorpay_signature) {

    await prisma.payment.create({
      data: {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        courseId,
        userId: dbUser.id,
        amount: amount.toString(),
        status: "FAILED",
      },
    });

    await prisma.enrolledCourse.update({
      where: {
        userId_courseId: {
          courseId,
          userId: dbUser.id,
        },
      },
      data: {
        courseId,
        userId: dbUser.id,
        courseAmount: amount.toString(),
        status: "FAILED",
      },
    });
  }

  await prisma.payment.create({
    data: {
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      courseId,
      userId: dbUser.id,
      amount: amount.toString(),
      status: "PAID",
    },
  });

  await prisma.enrolledCourse.update({
    where: {
      userId_courseId: {
        courseId,
        userId: dbUser.id,
      },
    },
    data: {
      courseId,
      userId: dbUser.id,
      courseAmount: amount.toString(),
      status: "PAID",
    },
  });
  revalidatePath(`course-detail/${courseId}`);
  return { success: true };
};
export default verifyPayment;
