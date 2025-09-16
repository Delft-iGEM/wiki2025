type FriendlyItems = 'left' | 'right' | 'center' | 'stretch' | 'start' | 'end';

interface ContentProps {
  readonly children: React.ReactNode;
  readonly items?: FriendlyItems;
  readonly className?: string;
}

export function Content({ children, items = 'right', className }: ContentProps) {
  // Map friendly words to complete Tailwind class names
  const itemsClassMap: Record<FriendlyItems, string> = {
    left: 'items-start',
    start: 'items-start',
    right: 'items-end',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
  };

  const itemsClass = itemsClassMap[items] || 'items-end';

  return (
    <div
      id="content"
      className={`max-container flex flex-col pt-5 ${itemsClass} ${className ?? ''}`.trim()}
    >
      {children}
    </div>
  );
}