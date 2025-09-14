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
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl dark:bg-fuchsia-500/20" />
        <div className="absolute top-1/2 -right-24 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/20" />
      </div>

      <div className="flex flex-col items-center text-center max-w-xl">
        <span className="mb-4 inline-flex items-center rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
          Oops! Nothing here
        </span>
        <h1 className="text-[6rem] md:text-[8rem] font-extrabold leading-none bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm select-none animate-[pulse_5s_ease-in-out_infinite]">
          404
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-4 w-full sm:justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-500/50 transition hover:bg-indigo-500 hover:shadow-indigo-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:ring-indigo-400/50"
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-8 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-700/70 dark:hover:text-white"
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

        <div className="mt-12 text-xs text-slate-400 dark:text-slate-500">
          <p>
            If you believe this is an error, let us know. Meanwhile, you can head back home
            or try using the navigation menu.
          </p>
        </div>
      </div>
    </main>
  );
}
