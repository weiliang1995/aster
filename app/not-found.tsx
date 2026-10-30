"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-col gap-10 min-h-screen min-w-screen">
        <Image
          src="/assets/images/dashboard-preview.png"
          alt="preview"
          width={480}
          height={480}
          className="aspect-video"
        />
        <span>
          <p className="text-center">404 Not Found</p>
          <p className="text-center">
            Redirecting to home page after 3 seconds...
          </p>
        </span>
      </div>
    </>
  );
}
