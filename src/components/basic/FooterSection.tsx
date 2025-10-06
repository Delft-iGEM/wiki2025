interface FooterSectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-secondary-foreground-complement drop-shadow-[0_2px_0_rgba(0,0,0,1)]">{title}</p>
      {children}
    </div>
  );
}
