import { NewsKeyType } from "@/@types";

export type NewsResponse = {
  count: number;
  job: string;
  profile: string;
  title: string;
  type: NewsKeyType;
  id: number;
};

export type DetailResponse = {
  click: boolean;
  count: number;
  description: string;
  link: string;
  notices: NoticeType[];
  originallink: string;
  pubDate: string;
  title: string;
  type: NewsKeyType;
};

export type NoticeType = {
  content: string;
  userName: string;
  userProfile: string;
  count: number;
  click: boolean;
  id: number;
};
