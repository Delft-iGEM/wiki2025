type Props = Readonly<{
  firstName: string;
  lastName: string;
  role: string;
  src: string;     // e.g. "/team/alice.jpg"
  bio?: React.ReactNode;
  alt?: string;
  flipped?: boolean;
}>;

export default function MemberCard({ firstName, lastName, role, src, bio, alt, flipped }: Props) {
  return (
    <div className="group relative w-full [perspective:1200px]">
      <div className="transition-transform duration-500 group-hover:-translate-y-3">
        <div className="relative grid h-full w-full rounded-2xl transition-transform duration-500 group-hover:shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="row-start-1 col-start-1 flex h-full min-h-[26rem] flex-col items-center gap-3 rounded-2xl p-4 shadow-lg [backface-visibility:hidden]">
            <img
              src={src}
              alt={alt ?? `${firstName} ${lastName}`}
              width={640}
              height={640}
              className={`${flipped ? "hex-avatar-flipped" : "hex-avatar"} h-70 w-70 object-cover `}
              loading="lazy"
            />
            <div className="text-center">
              <div className="text-xl">
                <span className="font-semibold">{firstName}</span> {lastName}
              </div>
              {role ? <div className="text-md text-neutral-500">{role}</div> : null}
            </div>
          </div>
          <div className="row-start-1 col-start-1 flex h-full min-h-[26rem] flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 text-center shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {bio ? (
              <div className="text-md text-muted-foreground">{bio}</div>
            ) : (
              <div className="text-md text-muted-foreground">More info coming soon.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
