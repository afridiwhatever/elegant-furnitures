import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSlug(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const saleEndDate = new Date();
saleEndDate.setDate(new Date().getDate() + 0);
export const finalDate = saleEndDate.toISOString();
