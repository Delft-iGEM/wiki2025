import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn } from "@/lib/utils";

export type DropdownProps = {
  /** Header shown in the collapsed/expanded bar */
  readonly header: string;
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
};

export type DropdownGroupProps = {
  /** Contents - should contain DropdownItem components */
  readonly children: React.ReactNode;
  /** Optional className applied to the group container */
  readonly className?: string;
  /** Allow multiple items to be open at once */
  readonly multiple?: boolean;
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
}: DropdownProps) {
  const itemValue = value ?? "item";

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? itemValue : undefined}
      className={cn(
        "w-full",
        `dropdown-level-${level}`,
        className
      )}
    >
      <AccordionItem value={itemValue}>
        <AccordionTrigger className={cn(
          "accordion-trigger",
          level === 0 && "text-3xl font-semibold",
          level === 1 && "text-2xl font-medium", 
          level === 2 && "text-xl font-normal",
          level === 3 && "text-lg font-normal text-muted-foreground"
        )}>
          {header}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

/**
 * Container for multiple dropdown items.
 * Use: <DropdownGroup><DropdownItem>…</DropdownItem><DropdownItem>…</DropdownItem></DropdownGroup>
 */
export function DropdownGroup({
  children,
  className,
  multiple = false,
  defaultOpen = [],
}: DropdownGroupProps) {
  if (multiple) {
    return (
      <Accordion
        type="multiple"
        defaultValue={defaultOpen}
        className={cn("w-full dropdown-group", className)}
      >
        {children}
      </Accordion>
    );
  }

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen[0]}
      className={cn("w-full dropdown-group", className)}
    >
      {children}
    </Accordion>
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
}: DropdownItemProps) {
  return (
    <AccordionItem 
      value={value} 
      className={cn(
        "dropdown-item",
        `dropdown-level-${level}`
      )}
    >
      <AccordionTrigger className={cn(
        "accordion-trigger",
        level === 0 && "text-xl font-medium",
        level === 1 && "text-lg font-medium", 
        level === 2 && "text-base font-normal",
        level === 3 && "text-sm font-normal text-muted-foreground"
      )}>
        {header}
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
}

export default Dropdown;
