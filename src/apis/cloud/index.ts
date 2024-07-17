import { useQuery } from "@tanstack/react-query";
import { instance, KeywordByWordResponse, type WordCloudResponse } from "@/apis";
import { NewsKeyType } from "@/@types";

const router = "/cloud";

export const useGetWordCloud = (date: string, type: NewsKeyType) => {
  return useQuery({
    queryKey: ["getWordCloud", date, type],
    queryFn: async () => {
      const { data } = await instance.get<WordCloudResponse[]>(`${router}?date=${date}&type=${type}`);
      return data;
    },
  });
};

export const useGetKeywordByNew = (date: string, type: NewsKeyType, word: string) => {
  return useQuery({
    queryKey: ["getKeywordByNew", date, type, word],
    queryFn: async () => {
      const { data } = await instance.get<KeywordByWordResponse[]>(
        `${router}/word?date=${date}&type=${type}&word=${word}`
      );
      return data;
    },
    enabled: !!word,
  });
};
