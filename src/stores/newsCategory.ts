import { type NewsKeyType } from "@/@types";
import dayjs from "dayjs";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NewsCategoryState = {
  category: NewsKeyType;
  date: string;
  text: string;
  setCategory: (category: NewsKeyType) => void;
  setDate: (date: string) => void;
  setText: (text: string) => void;
  resetText: () => void;
};

export const useNewsCategory = create<NewsCategoryState>()(
  devtools(set => ({
    category: "FINANCE",
    date: dayjs().format("YYYY-MM-DD"),
    text: "",
    setCategory: category => set(prev => ({ ...prev, category: category })),
    setDate: date => set(prev => ({ ...prev, date: date })),
    setText: text => set(prev => ({ ...prev, text: text })),
    resetText: () => set(prev => ({ ...prev, text: "" })),
  }))
);

type MyPageState = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

export const useMyPage = create<MyPageState>()(
  devtools(set => ({
    keyword: "",
    setKeyword: keyword => set({ keyword: keyword }),
  }))
);
