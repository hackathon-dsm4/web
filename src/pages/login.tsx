import styled from "styled-components";
import { Discription } from "@/components";
import { Google } from "@/assets/images";

export const Login = () => {
  return (
    <ContentWrap>
      <Discription />
      <Button onClick={() => {}}>
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
