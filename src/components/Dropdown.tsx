import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DropdownProps = {
  /** Header shown in the collapsed/expanded bar */
  readonly header: React.ReactNode; // Changed from string to ReactNode
  /** Contents rendered when expanded */
  readonly children: React.ReactNode;
  /** Whether the dropdown starts opened */
  readonly defaultOpen?: boolean;
  /** Optional className applied to the root Accordion */
  readonly className?: string;
  /** Optional stable value for the item (useful when rendering lists) */
  readonly value?: string;
  /** Nesting level (0-3) for hierarchical styling */
  readonly level?: 0 | 1 | 2 | 3;
  /** CSS variable for dropdown background color (e.g., "--section") */
  readonly color?: string;
};

export type DropdownGroupProps = {
  /** Contents - should contain DropdownItem components */
  readonly children: React.ReactNode;
  /** Optional className applied to the group container */
  readonly className?: string;
  /** Allow multiple items to be open at once */
  readonly multiple?: boolean;
  /** Alternatively specify single mode (alias to !multiple) for ergonomics in MDX */
  readonly single?: boolean;
  /** Default open values when multiple is true */
  readonly defaultOpen?: string[];
};

export type DropdownItemProps = {
  /** Header shown in the collapsed/expanded bar */
  readonly header: string;
  /** Contents rendered when expanded */
  readonly children: React.ReactNode;
  /** Stable value for the item */
  readonly value: string;
  /** Nesting level (0-3) for hierarchical styling */
  readonly level?: 0 | 1 | 2 | 3;
  /** CSS variable for dropdown background color (e.g., "--section") */
  readonly color?: string;
};

/**
 * Simple one-item dropdown built on shadcn/ui Accordion.
 * Use inside MDX or TSX: <Dropdown header="Section">…content…</Dropdown>
 */
export function Dropdown({
  header,
  children,
  defaultOpen,
  className,
  value,
  level = 0,
  color = "--section",
}: DropdownProps) {
  const itemValue = value ?? "item";

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpen ? itemValue : undefined}
      className={cn("dropdown-root dropdown-single", `dropdown-level-${level}`, className)}
    >
      <AccordionPrimitive.Item 
        value={itemValue} 
        className={cn("dropdown-item", `dropdown-level-${level}`)}
        style={{ "--dropdown-color": `var(${color})` } as React.CSSProperties}
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            className={cn(
              "accordion-trigger",
              "data-[state=open]:",
            )}
          >
            {header}
            <ChevronDownIcon className="dropdown-icon" />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className={cn("accordion-content")}>
          <div className={cn("accordion-content-inner")}>{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
}

/**
 * Container for multiple dropdown items.
 * Use: <DropdownGroup><DropdownItem>…</DropdownItem><DropdownItem>…</DropdownGroup>
 */
export function DropdownGroup({
  children,
  className,
  multiple = false,
  single,
  defaultOpen = [],
}: DropdownGroupProps) {
  const isMultiple = typeof single === "boolean" ? !single : multiple;

  if (isMultiple) {
    return (
      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={defaultOpen}
        className={cn("dropdown-root dropdown-group", className)}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpen[0]}
      className={cn("dropdown-root dropdown-group", className)}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

/**
 * Individual item within a DropdownGroup.
 * Use: <DropdownItem value="item1" header="Title">Content</DropdownItem>
 */
export function DropdownItem({
  header,
  children,
  value,
  level = 0,
  color = "--section",
}: DropdownItemProps) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={cn("dropdown-item", `dropdown-level-${level}`)}
      style={{ "--dropdown-color": `var(${color})` } as React.CSSProperties}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className={cn("accordion-trigger")}>
          {header}
          <ChevronDownIcon className="dropdown-icon" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className={cn("accordion-content")}>
        <div className={cn("accordion-content-inner")}>{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

export default Dropdown;
