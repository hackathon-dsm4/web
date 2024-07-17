import type { NewsKeyType } from "@/@types";

export type NoticeResponse = {
  click: boolean;
  content: string;
  count: number;
  id: number;
  newsId: number;
  title: string;
  type: NewsKeyType;
  userName: string;
  userProfile: string;
};

export type NoticeRequest = {
  id: number;
  content: string;
};
