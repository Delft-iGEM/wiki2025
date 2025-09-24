type Props = {
  firstName: string;
  lastName: string;
  role?: string;
  src: string;     // e.g. "/team/alice.jpg"
  alt?: string;
  bordered?: boolean; // new optional prop to show gradient border
};

export default function MemberCard({ firstName, lastName, role, src, alt, bordered }: Props) {
  const image = (
    <img
      src={src}
      alt={alt ?? `${firstName} ${lastName}`}
      width={320}
      height={320}
      className="hex-avatar h-40 w-40 object-cover"
      loading="lazy"
    />
  );

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl p-4 shadow-sm">
      {bordered ? (
        <div className="hex-avatar-border h-40 w-40">{image}</div>
      ) : (
        image
      )}
      <div className="text-center">
        <div className="text-lg"><span className="font-semibold">{firstName}</span> {lastName}</div>
        {role ? <div className="text-md text-neutral-500">{role}</div> : null}
      </div>
    </div>
  );
}
