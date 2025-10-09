import { useCallback } from "react";
import { Link } from "react-router-dom";

type Props = Readonly<{
  firstName: string;
  lastName: string;
  role: string;
  src: string;
  bio: React.ReactNode;
  alt?: string;
  flipped?: boolean;
  isFlipped: boolean;
  onToggle: () => void;
  flags?: React.ReactNode;
  linkedinUrl?: string;
}>;

export default function MemberCard({
  firstName,
  lastName,
  role,
  src,
  bio,
  alt,
  flipped,
  isFlipped,
  onToggle,
  flags,
  linkedinUrl,
}: Props) {
  const handleToggle = useCallback(() => {
    onToggle();
  }, [onToggle]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleToggle();
      }
    },
    [handleToggle],
  );

  const isBackVisible = isFlipped;

  return (
    <div
      className="group relative mx-auto h-[27rem] w-[20rem] flex-none cursor-pointer select-none [perspective:1200px]"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-pressed={isBackVisible}
    >
      <div
        className={`h-full w-full transition-transform duration-500 group-hover:-translate-y-3 ${
          isBackVisible ? "-translate-y-3" : ""
        }`}
      >
        <div
          className={`relative h-full w-full rounded-2xl transition-transform duration-500 group-hover:shadow-xl [transform-style:preserve-3d] ${
            isBackVisible ? "shadow-xl [transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front side */}
          <div className="absolute inset-0 flex h-full w-full flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-lg [backface-visibility:hidden]">
            {/* Flip indicator arrow */}
            <div className="absolute top-3 right-3 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-600"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </div>

            <img
              src={src}
              alt={alt ?? `${firstName} ${lastName}`}
              width={640}
              height={640}
              className={`${
                flipped ? "hex-avatar-flipped" : "hex-avatar"
              } h-70 w-70 flex-shrink-0 object-cover rounded-xl`}
              loading="lazy"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xl">
                <div>
                  <span className="font-semibold">{firstName}</span> {lastName}
                </div>
                {flags && <div className="flex">{flags}</div>}
              </div>
              {role ? (
                <div className="text-md text-neutral-500">{role}</div>
              ) : null}
            </div>
          </div>

          {/* Back side */}
          <div className="absolute inset-0 flex h-full w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {/* Move the bio text up */}
            <div className="mt-6 text-md text-neutral-700 leading-relaxed">
              {bio}
            </div>

            {/* Centered LinkedIn logo */}
            {linkedinUrl && (
              <Link
                to={linkedinUrl}
                aria-label={`${firstName} ${lastName} LinkedIn`}
                className="flex flex-1 items-center justify-center space-x-2"
              >

                <svg className="text-primary" fill="currentColor" height="1.5em" width="1.5em" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 21.349 21.335"><path d="M1819.415,1146.947q0-3.569,0-7.137c0-.661.009-1.322,0-1.983a1.538,1.538,0,0,0-1.573-1.532h-18.2a1.562,1.562,0,0,0-1.569,1.652q.005,9,0,18c0,.06,0,.121,0,.181a1.557,1.557,0,0,0,1.544,1.5q9.121,0,18.242,0a1.463,1.463,0,0,0,.747-.2,1.566,1.566,0,0,0,.808-1.46Q1819.411,1151.459,1819.415,1146.947Zm-15.184,7.521q-1.424-.007-2.848,0c-.119,0-.146-.034-.145-.148q0-4.943,0-9.886c0-.118.035-.146.149-.145q1.431.007,2.863,0c.118,0,.146.035.145.149q-.005,2.479,0,4.957c0,1.639,0,3.276,0,4.915C1804.4,1154.441,1804.355,1154.468,1804.231,1154.468Zm-1.4-11.561a1.839,1.839,0,1,1,1.838-1.846A1.842,1.842,0,0,1,1802.828,1142.907Zm13.435,9.517c.005.633,0,1.266,0,1.9,0,.119-.034.144-.148.144q-1.432-.007-2.864,0c-.125,0-.164-.028-.163-.16q.006-2.626,0-5.252a3.805,3.805,0,0,0-.185-1.265,1.349,1.349,0,0,0-1.268-.968,2.422,2.422,0,0,0-.83.07,1.544,1.544,0,0,0-1.082,1.072,4.428,4.428,0,0,0-.191,1.433q-.006,2.451,0,4.9c0,.139-.039.168-.171.167q-1.4-.008-2.808,0c-.147,0-.172-.044-.172-.18q.007-2.458,0-4.917t0-4.93c0-.124.032-.155.155-.154q1.362.008,2.724,0c.116,0,.151.031.148.148-.007.382,0,.764,0,1.145,0,.034-.021.083.028.1s.05-.032.066-.059a3.184,3.184,0,0,1,2.343-1.522,4.572,4.572,0,0,1,2.349.233,2.834,2.834,0,0,1,1.7,1.807,6.148,6.148,0,0,1,.333,1.791C1816.3,1149.426,1816.251,1150.926,1816.263,1152.424Z" transform="translate(-1798.069 -1136.295)"></path></svg>

                <span>LinkedIn</span>
              </Link>
            )}

            {/* Contribution link at bottom */}
            <Link
              className="text-sm text-blue-600 hover:underline mt-auto"
              to="../attributions"
            >
              Review my project tasks & contributions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
