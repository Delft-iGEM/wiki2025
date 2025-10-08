import { useCallback } from "react";

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
}>;

export default function MemberCard({ firstName, lastName, role, src, bio, alt, flipped, isFlipped, onToggle, flags }: Props) {
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
      <div className={`h-full w-full transition-transform duration-500 group-hover:-translate-y-3 ${isBackVisible ? "-translate-y-3" : ""}`}>
        <div
          className={`relative h-full w-full rounded-2xl transition-transform duration-500 group-hover:shadow-xl [transform-style:preserve-3d] ${isBackVisible ? "shadow-xl [transform:rotateY(180deg)]" : ""}`}
        >
          {/* Front side */}
          <div className={`absolute inset-0 flex h-full w-full flex-col items-center gap-3 rounded-2xl p-4 shadow-lg [backface-visibility:hidden]`}>
            {/* Flip indicator arrow */}
            <div className={`absolute top-3 right-3 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110`}>
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
              className={`${flipped ? "hex-avatar-flipped" : "hex-avatar"} h-70 w-70 flex-shrink-0 object-cover`}
              loading="lazy"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-xl">
                <div>
                  <span className="font-semibold">{firstName}</span> {lastName}
                </div>
                {flags && <div className="flex">{flags}</div>}
              </div>
              {role ? <div className="text-md text-neutral-500">{role}</div> : null}
            </div>
          </div>
          {/* Back side */}
          <div className={`absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-primary/20 p-6 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
            <div className="text-md text-muted-foreground">{bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
