type FriendlyItems = 'left' | 'right' | 'center' | 'stretch' | 'start' | 'end';

interface ContentProps {
  readonly children: React.ReactNode;
  readonly items?: FriendlyItems;
  readonly className?: string;
  readonly wide?: boolean;
}

export function Content({ children, items = 'right', className, wide }: ContentProps) {
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
      className={`${wide ? 'max-container' : 'narrow-container'} flex flex-col pt-5 ${itemsClass} ${className ?? ''}`.trim()}
    >
      {children}
    </div>
  );
}