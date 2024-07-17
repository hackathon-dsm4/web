import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { MyShareResponse, NoticeResponse, UserResponse } from "@/apis";

const router = "/user";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: async () => {
      const { data } = await instance.get<UserResponse>(`${router}`);
      return data;
    },
  });
};

export const useGetMyNotice = () => {
  return useQuery({
    queryKey: ["getMyNotice"],
    queryFn: async () => {
      const { data } = await instance.get<NoticeResponse[]>(`${router}/my-notice`);
      return data;
    },
  });
};

export const useGetMyShare = () => {
  return useQuery({
    queryKey: ["getMyShare"],
    queryFn: async () => {
      const { data } = await instance.get<MyShareResponse[]>(`${router}/my-share`);
      return data;
    },
  });
};
