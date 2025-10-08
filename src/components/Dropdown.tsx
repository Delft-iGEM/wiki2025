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
  /** Border style properties for the dropdown */
  readonly border?: React.CSSProperties['border'];
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
  readonly header: React.ReactNode;
  /** Contents rendered when expanded */
  readonly children: React.ReactNode;
  /** Stable value for the item */
  readonly value: string;
  /** Optional anchor id applied to the item root */
  readonly id?: string;
  /** Nesting level (0-3) for hierarchical styling */
  readonly level?: 0 | 1 | 2 | 3;
  /** CSS variable for dropdown background color (e.g., "--section") */
  readonly color?: string;
  /** Border style properties for the dropdown */
  readonly border?: React.CSSProperties['border'];
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
  border,
}: DropdownProps) {
  const itemValue = value ?? "item";

  const itemStyle: React.CSSProperties & { [key: string]: any } = {
    "--dropdown-color": `var(${color})`,
    ...(border && { border }),
  };

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
        style={itemStyle}
      >
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            className={cn(
              "accordion-trigger",
              "flex justify-between items-center w-full",
              "data-[state=open]:",
            )}
          >
            {header}
            <ChevronDownIcon className="dropdown-icon w-6 h-6" />
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
  id,
  level = 0,
  color = "--section",
  border,
}: DropdownItemProps) {
  const itemStyle: React.CSSProperties & { [key: string]: any } = {
    "--dropdown-color": `var(${color})`,
    ...(border && { border }),
  };

  return (
    <AccordionPrimitive.Item
      id={id}
      value={value}
      className={cn("dropdown-item", `dropdown-level-${level}`)}
      style={itemStyle}
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className={cn("accordion-trigger", "flex justify-between items-center w-full")}>
          {header}
          <ChevronDownIcon className="dropdown-icon w-6 h-6" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className={cn("accordion-content")}>
        <div className={cn("accordion-content-inner")}>{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}

export default Dropdown;
