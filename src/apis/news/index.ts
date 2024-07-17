import { useQuery } from "@tanstack/react-query";
import { DetailResponse, instance, NewsResponse } from "@/apis";
import { NewsKeyType } from "@/@types";

const router = "/news";

export const useGetNews = (category: NewsKeyType) => {
  return useQuery({
    queryKey: ["getNews", category],
    queryFn: async () => {
      const { data } = await instance.get(`${router}?category=${category}`);
      return data;
    },
  });
};

export const useGetAllNews = () => {
  return useQuery({
    queryKey: ["getAllNews"],
    queryFn: async () => {
      const { data } = await instance.get<NewsResponse[]>(`${router}/all`);
      return data;
    },
  });
};

export const useGetNewsDetail = (id: number) => {
  return useQuery({
    queryKey: ["getNewsDetail", id],
    queryFn: async () => {
      const { data } = await instance.get<DetailResponse>(`${router}/${id}`);
      return data;
    },
  });
};
