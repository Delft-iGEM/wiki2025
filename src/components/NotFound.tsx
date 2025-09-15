import { Link } from "react-router-dom";
import { useCallback } from "react";

export function NotFound() {
  const goBack = useCallback(() => {
    if (window.history.length > 1) window.history.back();
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 py-24">
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center max-w-xl">
        <span className="mb-4 inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
          Oops! Nothing here
        </span>
        <h1 className="text-[6rem] md:text-[8rem] font-extrabold leading-none bg-gradient-to-br from-brand via-primary to-secondary bg-clip-text text-transparent drop-shadow-sm select-none animate-[pulse_5s_ease-in-out_infinite]">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-4 w-full sm:justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-brand/20 ring-1 ring-ring transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition group-hover:scale-110"
            >
              <path d="M3 12L12 3l9 9" />
              <path d="M9 21V9h6v12" />
            </svg>
            Back Home
          </Link>
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-8 py-3 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition hover:bg-muted"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Go Back
          </button>
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          <p>
            If you believe this is an error, let us know. Meanwhile, you can head back home
            or try using the navigation menu.
          </p>
        </div>
      </div>
    </main>
  );
}
