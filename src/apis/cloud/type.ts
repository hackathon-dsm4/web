import { NewsKeyType } from "@/@types";

export type WordCloudResponse = {
  count: number;
  issueDate: string;
  kind: NewsKeyType;
  word: string;
  wordId: number;
};

export type KeywordByWordResponse = {
  queryList: QueryListType[];
  word: string;
};

export type QueryListType = {
  content: string;
  id: number;
  job: string;
  type: NewsKeyType;
  profile: string;
};
