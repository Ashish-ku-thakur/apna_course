// types/razorpay.d.ts
export {};

declare global {
  interface Window {
    Razorpay: any; // or you can use RazorpayOptions if you're using a type-safe wrapper
  }
}
