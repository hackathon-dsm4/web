import { DictType } from "@/@types";

export type DictResponse = {
  meaning: string;
  type: DictType;
  word: string;
  wordId: number;
};
