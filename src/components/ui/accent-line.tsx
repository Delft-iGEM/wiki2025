import { cn } from "@/lib/utils";

interface AccentLineProps {
  readonly className?: string;
}

export function AccentLine({ className }: AccentLineProps) {
  return (
    <div
      className={cn(
        "my-0.5 h-2 w-[20%] rounded-full bg-gradient-to-r from-brand via-primary to-secondary",
        className,
      )}
    />
  );
}