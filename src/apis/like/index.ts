import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from "@/apis";
import toast from "react-hot-toast";

const router = "/like";

export const useFeedLike = (id: number) => {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: () => instance.post(`${router}/${id}`),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["getNotice"] });
      queryclient.invalidateQueries({ queryKey: ["getMyNotice"] });
      queryclient.invalidateQueries({ queryKey: ["getNewsDetail"] });
      toast.success("해당 피드의 좋아요 상태를 변경했어요.");
    },
    onError: () => {
      toast.error("좋아요 변경에 실패했어요.");
    },
  });
};
