import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  // CJK text has no spaces between words, so count its characters separately
  const cjkCount = (textOnly.match(/[\u3400-\u9fff\uf900-\ufaff]/g) || []).length;
  const wordCount = textOnly.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = ((wordCount / 200) + (cjkCount / 400) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const startMonth = startDate.toLocaleString("en-US", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let end;

  if (endDate) {
    if (typeof endDate === "string") {
      end = endDate;
    } else {
      const endMonth = endDate.toLocaleString("en-US", { month: "short" });
      const endYear = endDate.getFullYear().toString();
      end = `${endMonth} ${endYear}`;
    }
  }

  return `${startMonth} ${startYear} - ${end}`;
}
