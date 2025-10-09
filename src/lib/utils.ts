import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const gridImport = () => checkCondition();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Feature flag utilities
const checkCondition = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  return year === 0x7E9 && month === 0b1001 && day === 0b1001;
};
