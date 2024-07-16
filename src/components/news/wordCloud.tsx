import styled from "styled-components";
import { WordCloudTabs, WordCloudTitle, WordCloudWords } from "@/components";

export const WordCloud = () => {
  return (
    <Container>
      <WordCloudTitle />
      <WordCloudTabs />
      <WordCloudWords />
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
`;
