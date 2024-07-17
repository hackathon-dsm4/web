import { NewsKeyType } from "@/@types";

export type UserResponse = {
  email: string;
  nickname: string;
  profile: string;
};

export type MyShareResponse = {
  content: string;
  count: number;
  id: number;
  title: string;
  type: NewsKeyType;
  profile: string;
};
