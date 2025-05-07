'use client';

import createOrder from '@/actions/coursePurchase/create-order';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

type ByCourseBtnProps = {
  courseId: string;
};
declare global {
  interface Window {
    Razorpay: any;
  }
}


const ByCourseBtn: React.FC<ByCourseBtnProps> = ({ courseId }) => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const handlePurchase = async () => {
    if (!razorpayLoaded) return;

    const response = await createOrder(courseId);
    if (!response) return;

    console.log("Order creation response:", response);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: response.amount,
      currency: response.currency,
      order_id: response.orderId,
      name: response.courseName,

      handler: async function (paymentResponse: any) {
        alert(paymentResponse.razorpay_signature)
        console.log(paymentResponse);

        const verify = await fetch('/api/verify-payment', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_payment_id: paymentResponse.razorpay_payment_id,
            razorpay_order_id: paymentResponse.razorpay_order_id,
            razorpay_signature: paymentResponse.razorpay_signature, // this MUST exist
            courseId,
            amount: response.amount,
          }),
          credentials: "include"
        });

        const result = await verify.json();
        if (result.success) {
          alert("Payment Verified!");
        } else {
          alert("Payment Failed!");
        }
      },
      prefill: {
        name: response.userName,
        email: response.userEmail,
      },
      theme: {
        color: "#193cb8",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <Button onClick={handlePurchase}>
      Buy Course
    </Button>
  );
};

export default ByCourseBtn;
