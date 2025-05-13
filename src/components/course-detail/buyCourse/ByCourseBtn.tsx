'use client';

import createOrder from '@/actions/coursePurchase/create-order';
import { Button } from '@/components/ui/button';
import React, { startTransition, useEffect, useState } from 'react';
import type { RazorpayOptions, RazorpayPaymentResponse } from '../../../../types/razorpay';
import verifyPayment from '@/actions/coursePurchase/payment-verify';

type BuyCourseBtnProps = {
  courseId: string;
};

const BuyCourseBtn: React.FC<BuyCourseBtnProps> = ({ courseId }) => {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handlePurchase = async () => {
    if (!razorpayLoaded) return;

    const response = await createOrder(courseId);
    if (!response) return;

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
      amount: response.amount as number,
      currency: response.currency as string,
      order_id: response.orderId as string,
      name: response.courseName as string,

      handler: async function (paymentResponse: RazorpayPaymentResponse) {

        
        startTransition(async () => {
          const verify = await verifyPayment(paymentResponse.razorpay_payment_id, paymentResponse.razorpay_order_id, paymentResponse.razorpay_signature, courseId, response.amount as number)
          if (verify?.success) {
            alert('Payment Verified!');
          } else {
            alert('Payment Failed!');
          }
        })

      },
      prefill: {
        name: response.userName,
        email: response.userEmail,
      },
      theme: {
        color: '#6366f1',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Button onClick={handlePurchase} disabled={!razorpayLoaded}>
      Buy Course
    </Button>
  );
};

export default BuyCourseBtn;
