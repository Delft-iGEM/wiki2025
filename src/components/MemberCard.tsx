type Props = {
  name: string;
  role?: string;
  src: string;     // e.g. "/team/alice.jpg"
  alt?: string;
};

export default function MemberCard({ name, role, src, alt }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl p-4 shadow-sm">
      <img
        src={src}
        alt={alt ?? name}
        width={320}
        height={320}
        className="h-40 w-40 rounded-full object-cover"
        loading="lazy"
      />
      <div className="text-center">
        <div className="text-base font-semibold">{name}</div>
        {role ? <div className="text-sm text-neutral-500">{role}</div> : null}
      </div>
    </div>
  );
}
