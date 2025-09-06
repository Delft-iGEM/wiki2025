interface FooterSectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {children}
    </div>
  );
}