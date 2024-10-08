import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";

function PaymentSucces() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-24 h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <CircleCheckIcon className="h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold">Payment Successful</h1>
        <p className="max-w-md text-center text-gray-500 dark:text-gray-400">
          Congratulations! Your payment was processed successfully. Thank you
          for your business.
        </p>
      </div>
      <Button asChild>
        <Link href={"/"} prefetch={false}>
          Go to Homepage
        </Link>
      </Button>
    </section>
  );
}

export default PaymentSucces;

function CircleCheckIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
