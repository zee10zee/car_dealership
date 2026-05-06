import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes without conflicts and supports conditional classes.
 * 
 * @param inputs - Class values (strings, objects, arrays, etc.)
 * @returns A merged className string
 * 
 * @example
 * cn("p-4", isActive && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}