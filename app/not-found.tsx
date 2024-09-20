"use client";

import { useRouter } from "next/navigation";

function NotFoundPage() {
  const router = useRouter();

  return (
    <main className="h-dvh flex flex-col items-center justify-center font-vt323">
      <h1 className="text-4xl text-center">you appear lost</h1>
      <div
        className="btn mt-4 px-20 rounded-full text-xl"
        onClick={() => router.back()}>
        return from whence you came
      </div>
    </main>
  );
}

export default NotFoundPage;
