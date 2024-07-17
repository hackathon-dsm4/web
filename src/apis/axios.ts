import axios, { type AxiosError } from "axios";
import { reIssueToken } from "@/apis";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10_000,
});

instance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("access_token");
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error;
      if (error.response.status === 401 || !localStorage.getItem("access_token")) {
        reIssueToken()
          .then(res => {
            localStorage.setItem("access_token", res.accessToken);
            localStorage.setItem("access_token", res.refreshToken);
            if (config!.headers) {
              config!.headers.Authorization = `Bearer ${res.accessToken}`;
            }
            return axios(config!);
          })
          .catch(() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/login";
          });
      }
    }
    throw error;
  }
);
