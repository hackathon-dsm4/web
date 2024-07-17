import { MyPageLeft, MyPageRightTop } from "@/components";
import styled from "styled-components";

export const MyPage = () => {
  return (
    <Container>
      <MyPageLeft />
      <MyPageRightTop />
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw - 276px);
  height: 100vh;
  padding-top: 40px;
  margin-left: 276px;
  display: flex;
  justify-content: center;
  gap: 80px;
`;
