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
  const image = (
    <img
      src={src}
      alt={alt ?? `${firstName} ${lastName}`}
      width={640}
      height={640}
      className={`${flipped ? "hex-avatar-flipped" : "hex-avatar"} h-70 w-70 object-cover`}
      loading="lazy"
    />
  );

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-lg">
      {image}
      <div className="text-center">
        <div className="text-xl"><span className="font-semibold">{firstName}</span> {lastName}</div>
        {role ? <div className="text-md text-neutral-500">{role}</div> : null}
      </div>
      {bio ? <div className="mt-2 my-1 text-md text-muted-foreground">{bio}</div> : null}
    </div>
  );
}
