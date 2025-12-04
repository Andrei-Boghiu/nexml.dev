import { clsx, type ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripWhitespace(children: ReactNode): ReactNode | null {
  if (Array.isArray(children)) {
    const filtered = children.filter((child) => {
      if (typeof child === "string") return child.trim() !== "";
      return true; // keep elements and other ReactNodes
    });

    if (filtered.length === 0) return null;

    return filtered;
  }

  if (typeof children === "string" && children.trim() === "") return null;

  return children;
}
