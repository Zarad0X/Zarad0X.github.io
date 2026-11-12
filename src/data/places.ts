/**
 * Location Scout · Hong Kong
 * One object per place, in the order the red string should run.
 * - lon/lat: public landmark coordinates. `approx: true` = deliberately fuzzy (shown as an area, not a point).
 * - note: { zh, en } shown as Hong Kong–film style bilingual subtitles. Leave empty until there's something to say.
 * - when: free text, e.g. "Oct 2026".
 */
export type PlaceKind = "campus" | "tennis" | "cinema" | "art" | "food" | "night" | "waterfront" | "shopping" | "home";

export interface Place {
  zh: string;
  en: string;
  slug: string;          // screenplay scene heading
  kind: PlaceKind;
  lon: number;
  lat: number;
  approx?: boolean;
  when?: string;
  note?: { zh?: string; en?: string };
}

export const kindName: Record<PlaceKind, string> = {
  campus: "Campus", tennis: "Tennis", cinema: "Cinema", art: "Art & culture", food: "Food & drink",
  night: "Night out", waterfront: "Waterfront", shopping: "Late-night shopping", home: "Home base",
};

export const places: Place[] = [
  // Ordered west → east for now; switch to chronological once dates are filled in.
  { zh: "中環", en: "Central", slug: "EXT. CENTRAL — HALLOWEEN NIGHT", kind: "night", lon: 114.1553, lat: 22.2808,
    note: { zh: "萬聖節", en: "Halloween." } },
  { zh: "西九文化區", en: "West Kowloon Cultural District", slug: "EXT. WEST KOWLOON CULTURAL DISTRICT — DUSK", kind: "art", lon: 114.1590, lat: 22.3008 },
  { zh: "百老匯電影中心", en: "Broadway Cinematheque", slug: "INT. BROADWAY CINEMATHEQUE — NIGHT", kind: "cinema", lon: 114.1697, lat: 22.3093 },
  { zh: "K11 Art House", en: "K11 Art House", slug: "INT. K11 ART HOUSE — NIGHT", kind: "cinema", lon: 114.1739, lat: 22.2946 },
  { zh: "尖東 · 星光大道", en: "Avenue of Stars · TST East", slug: "EXT. AVENUE OF STARS, TSIM SHA TSUI — NIGHT", kind: "waterfront", lon: 114.1770, lat: 22.2930 },
  { zh: "灣仔海濱", en: "Wan Chai Harbourfront", slug: "EXT. WAN CHAI HARBOURFRONT — NIGHT", kind: "waterfront", lon: 114.1772, lat: 22.2838,
    note: { zh: "國慶煙花", en: "National Day fireworks." } },
  { zh: "銅鑼灣 · DON DON DONKI", en: "DON DON DONKI · Causeway Bay", slug: "INT. DON DON DONKI, CAUSEWAY BAY — LATE NIGHT", kind: "shopping", lon: 114.1838, lat: 22.2798 },
  { zh: "維多利亞公園網球場", en: "Victoria Park Tennis Centre", slug: "EXT. VICTORIA PARK TENNIS CENTRE — DAY", kind: "tennis", lon: 114.1912, lat: 22.2826,
    note: { zh: "香港網球公開賽", en: "Hong Kong Tennis Open (WTA 250)." } },
  { zh: "將軍澳 · OOLAA", en: "OOLAA · Tseung Kwan O", slug: "INT. OOLAA, TSEUNG KWAN O — NIGHT", kind: "food", lon: 114.2600, lat: 22.3075 },
  { zh: "坑口", en: "Hang Hau", slug: "INT. HANG HAU — HOME BASE", kind: "home", lon: 114.262, lat: 22.317, approx: true,
    note: { en: "Home base. Marked as an area on purpose." } },
  { zh: "清水灣 · 香港科技大學", en: "Clear Water Bay · HKUST", slug: "EXT. CLEAR WATER BAY — HKUST — DAY", kind: "campus", lon: 114.2655, lat: 22.3363,
    note: { en: "Visiting intern since Sep 2026." } },
];
