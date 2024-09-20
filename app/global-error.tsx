"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error); // Log the error to avoid annoying unused variable linting errors

  return (
    <html>
      <body>
        <div className="h-dvh flex flex-col items-center justify-center font-vt323">
          <h1 className="text-4xl text-center">ow something aint right</h1>
          <div
            className="btn mt-4 px-20 rounded-full text-xl"
            onClick={() => reset()}>
            try again
          </div>
        </div>
      </body>
    </html>
  );
}
