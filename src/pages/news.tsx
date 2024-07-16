import styled from "styled-components";
import { Articles, WordCloud } from "@/components";

export const News = () => {
  return (
    <Container>
      <WordCloud />
      <Articles />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2% 3% 2%;
  margin-left: 276px;
  height: 100vh;
  box-sizing: border-box;
  justify-content: space-between;
`;
