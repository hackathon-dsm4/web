import { useSignIn } from "@/apis";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Redirect = () => {
  const params = useLocation();
  const accessToken = params.hash.split("=")[1].split("&")[0];

  const { mutate } = useSignIn({ token: accessToken! });

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
