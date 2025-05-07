// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import prisma from "@/lib/prisma-client";
import { currentUser } from "@clerk/nextjs/server";

const RAZORPAY_SECRET = process.env.RAZORPAY_KEY_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      courseId,
      amount,
    } = await req.json();

    console.log("req->", req);

    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const amountString = Number(amount) / 100;

    // ✅ Validate Signature
    const generatedSignature = crypto
      .createHmac("sha256", RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // ✅ Find internal DB user
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (!dbUser) {
      console.log("till User not found->");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (generatedSignature !== razorpay_signature) {

      await prisma.payment.create({
        data: {
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          courseId,
          userId: dbUser.id,
          amount: amountString.toString(),
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
          courseAmount: amountString.toString(),
          status: "FAILED",
        },
      });
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // ✅ Save Payment
    await prisma.payment.create({
      data: {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        courseId,
        userId: dbUser.id,
        amount: amountString.toString(),
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
        courseAmount: amountString.toString(),
        status: "PAID",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Payment Verification Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
