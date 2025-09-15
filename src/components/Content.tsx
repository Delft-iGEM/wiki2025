type FriendlyItems = 'left' | 'right' | 'center' | 'stretch' | 'start' | 'end';

interface ContentProps {
  readonly children: React.ReactNode;
  /**
   * Human friendly alignment keywords:
   *  - left / start   => flex-start
   *  - right / end    => flex-end
   *  - center         => center
   *  - stretch        => stretch
   * Defaults to 'right' (end alignment) to preserve previous behavior.
   */
  readonly items?: FriendlyItems;
  /** Additional class names to append */
  readonly className?: string;
}

export function Content({ children, items = 'right', className }: ContentProps) {
  // Map friendly words to canonical flex alignment keywords
  const map: Record<FriendlyItems, 'start' | 'end' | 'center' | 'stretch'> = {
    left: 'start',
    start: 'start',
    right: 'end',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
  };

  const canonical = map[items] ?? 'start';
  const itemsClass = `items-${canonical}-safe`;

  return (
    <div
      id="content"
      className={`max-container flex flex-col pt-5 content-start-safe ${itemsClass} ${className ?? ''}`.trim()}
    >
      {children}
    </div>
  );
}