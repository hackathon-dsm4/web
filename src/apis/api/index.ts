import { useQuery } from "@tanstack/react-query";
import { DictResponse, instance } from "@/apis";
import { Dictcategory, DictType } from "@/@types";

const router = "/api";

export const useGetDict = (type: DictType) => {
  return useQuery({
    queryKey: ["getDict", type],
    queryFn: async () => {
      const { data } = await instance.get<DictResponse[]>(`${router}/dict?&type=${type}`);
      return data;
    },
  });
};
