import { useMutation } from "@tanstack/react-query";
import { RefreshResponse, type SignInRequest } from "@/apis";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const router = "/auth";

export const useSignIn = (data: SignInRequest) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => axios.post(`${import.meta.env.VITE_BASE_URL}${router}`, data),
    onSuccess: res => {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      toast.success("로그인에 성공하였어요.");
      navigate("/news");
    },
    onError: () => {
      toast.error("로그인에 실패했어요.");
    },
  });
};

export const reIssueToken = async () => {
  const { data } = await axios.post<RefreshResponse>(`${import.meta.env.VITE_BASE_URL}${router}/refresh`, {
    token: localStorage.getItem("refresh_token"),
  });
  return data;
};
