export const NewsType = {
  FINANCE: "금융",
  STOCK: "증권",
  INDUSTRY: "산업/재계",
  VENTURE: "중기/벤처",
  REAL_ESTATE: "부동산",
  GLOBAL: "글로벌 경제",
  LIVING: "생활경제",
  GENERAL: "경제 일반",
} as const;

export type NewsKeyType = keyof typeof NewsType;

export const Dictcategory = {
  ETC: "전체",
  MANAGEMENT: "경영",
  ECONOMY: "경제",
  PUBLIC: "공공",
  SCIENCE: "과학",
  FINANCE: "금융",
  SOCIAL: "사회",
} as const;

export type DictType = keyof typeof Dictcategory;
