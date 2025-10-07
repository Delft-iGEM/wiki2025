import { cn } from "@/lib/utils";

interface AccentLineProps {
  readonly className?: string;
  readonly alt?: boolean;
}

export function AccentLine({ className, alt }: AccentLineProps) {
  return (
    <div
      className={cn(
        "my-0.5 h-2 w-[20%] rounded-full bg-gradient-to-r",
        alt ? "bg-gradient-to-r from-tertiary to-transparent" : "from-brand via-primary to-secondary",
        className,
      )}
    />
  );
}