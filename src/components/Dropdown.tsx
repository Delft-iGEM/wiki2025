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
  header: string;
  /** Contents rendered when expanded */
  children: React.ReactNode;
  /** Whether the dropdown starts opened */
  defaultOpen?: boolean;
  /** Optional className applied to the root Accordion */
  className?: string;
  /** Optional stable value for the item (useful when rendering lists) */
  value?: string;
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
}: DropdownProps) {
  const itemValue = value ?? "item";

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? itemValue : undefined}
      className={cn("w-full", className)}
    >
      <AccordionItem value={itemValue}>
        <AccordionTrigger className="text-3xl font-semibold">{header}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default Dropdown;
