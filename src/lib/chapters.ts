import type { CollectionEntry } from "astro:content";

const EN = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];
const ZH = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

function zhNumber(n: number): string {
  if (n < 10) return ZH[n];
  if (n < 20) return "十" + (n % 10 ? ZH[n % 10] : "");
  if (n < 100) return ZH[Math.floor(n / 10)] + "十" + (n % 10 ? ZH[n % 10] : "");
  return String(n);
}

/** "Chapter One" / "第一章" — posts are numbered by date within their language, oldest first. */
export function chapterLabel(n: number, lang: "en" | "zh"): string {
  if (lang === "zh") return `第${zhNumber(n)}章`;
  return `Chapter ${EN[n] ?? n}`;
}

export function chapterNumber(post: CollectionEntry<"blog">, all: CollectionEntry<"blog">[]): number {
  const sameLang = all
    .filter(p => !p.data.draft && p.data.lang === post.data.lang)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf() || a.slug.localeCompare(b.slug));
  return sameLang.findIndex(p => p.slug === post.slug) + 1;
}

/** Reading time in whole minutes ("runtime"), counting CJK characters separately from words. */
export function runtimeMinutes(markdown: string): number {
  const text = markdown.replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ").replace(/[#*_>`\[\]()!-]/g, " ");
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) || []).length;
  const words = text.replace(/[㐀-鿿豈-﫿]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230 + cjk / 400));
}
