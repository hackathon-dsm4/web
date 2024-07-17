import styled from "styled-components";
import { Discription } from "@/components";
import { Google } from "@/assets/images";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <ContentWrap>
      <Discription />
      <Button
        onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&response_type=token&scope=email+profile`;
        }}
      >
        <img width={32} height={32} src={Google} alt="" />
        <span style={{ marginTop: "2px" }}>구글로 시작하기</span>
      </Button>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 80px;
`;

const Button = styled.button`
  position: relative;
  width: 300px;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  gap: 8px;
`;
