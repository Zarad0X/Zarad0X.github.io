/**
 * The Shelf — things Han keeps coming back to.
 * Add an item by appending an object. `note` is optional and shows on the rental card.
 * `color` / `ink` are the spine or sleeve colours (keep to the pulp palette).
 */
export type ShelfKind = "film" | "album" | "single" | "book" | "game";

export interface ShelfItem {
  kind: ShelfKind;
  title: string;
  sub?: string;     // alt / original-language title, or a qualifier
  by: string;
  year: string;
  color: string;
  ink: string;
  note?: string;
  link?: string;    // e.g. Apple Music
}

export const shelf: ShelfItem[] = [
  // Films — VHS spines
  { kind: "film", title: "The Godfather", by: "Francis Ford Coppola", year: "1972", color: "#141010", ink: "#f6c400" },
  { kind: "film", title: "Taxi Driver", by: "Martin Scorsese", year: "1976", color: "#d3241c", ink: "#f7ecd2" },
  { kind: "film", title: "Pulp Fiction", by: "Quentin Tarantino", year: "1994", color: "#f6c400", ink: "#d3241c" },
  { kind: "film", title: "Se7en", by: "David Fincher", year: "1995", color: "#3d4a2c", ink: "#f2e6cc" },
  { kind: "film", title: "Kill Bill", sub: "Vol. 1 & 2", by: "Quentin Tarantino", year: "2003–04", color: "#f6c400", ink: "#141010" },
  { kind: "film", title: "Whiplash", by: "Damien Chazelle", year: "2014", color: "#141010", ink: "#f2e6cc" },
  { kind: "film", title: "Gone Girl", by: "David Fincher", year: "2014", color: "#f2e6cc", ink: "#141010" },

  // Records — LPs and 7-inch singles
  { kind: "album", title: "Slowhand", by: "Eric Clapton", year: "1977", color: "#c9a46a", ink: "#141010", link: "https://music.apple.com/hk/album/slowhand-35th-anniversary-edition/1440782705" },
  { kind: "album", title: "Continuum", by: "John Mayer", year: "2006", color: "#141010", ink: "#f2e6cc", link: "https://music.apple.com/hk/album/continuum/184335550" },
  { kind: "single", title: "平日快乐", sub: "from No.13 作品：跳舞的梵谷", by: "孙燕姿 Stefanie Sun", year: "2017", color: "#1f5f5b", ink: "#f6c400", link: "https://music.apple.com/hk/album/%E5%B9%B3%E6%97%A5%E5%BF%AB%E6%A8%82/1440901467?i=1440901815" },
  { kind: "single", title: "Birds of a Feather", by: "Billie Eilish", year: "2024", color: "#1d2a4a", ink: "#f2e6cc", link: "https://music.apple.com/hk/album/birds-of-a-feather/1739659134?i=1739659142" },
  { kind: "single", title: "Not Like Us", by: "Kendrick Lamar", year: "2024", color: "#d3241c", ink: "#141010", link: "https://music.apple.com/hk/album/not-like-us/1781353928?i=1781353929" },

  // Books — paperback spines
  { kind: "book", title: "The Great Gatsby", by: "F. Scott Fitzgerald", year: "1925", color: "#1d2a4a", ink: "#f6c400" },
  { kind: "book", title: "野草", sub: "Wild Grass", by: "鲁迅 Lu Xun", year: "1927", color: "#f2e6cc", ink: "#141010" },
  { kind: "book", title: "Antifragile", by: "Nassim Nicholas Taleb", year: "2012", color: "#141010", ink: "#d3241c" },

  // Games — cases
  { kind: "game", title: "Grand Theft Auto V", by: "Rockstar Games", year: "2013", color: "#3d4a2c", ink: "#f6c400" },
  { kind: "game", title: "God of War", by: "Santa Monica Studio", year: "2018", color: "#d3241c", ink: "#f2e6cc" },
  { kind: "game", title: "Resident Evil 4", sub: "Remake", by: "Capcom", year: "2023", color: "#141010", ink: "#d3241c" },
  { kind: "game", title: "Baldur's Gate 3", by: "Larian Studios", year: "2023", color: "#f2e6cc", ink: "#141010" },
];

export const formatName: Record<ShelfKind, string> = {
  film: "VHS · Feature",
  album: "12\" LP",
  single: "7\" Single",
  book: "Paperback",
  game: "Game",
};
