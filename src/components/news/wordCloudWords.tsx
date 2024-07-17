import { styled } from "styled-components";
import ReactWordcloud, { Optional, Options } from "react-wordcloud";
import { useGetWordCloud } from "@/apis/cloud";
import { useNewsCategory } from "@/stores";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const WordCloudWords = () => {
  const { date, category, text, setText } = useNewsCategory();
  const queryclient = useQueryClient();
  const { data: wordCloud } = useGetWordCloud(date, category);

  useEffect(() => {
    setText(wordCloud ? wordCloud[0].word : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    queryclient.invalidateQueries({ queryKey: ["useGetKeywordByNew"] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const callbacks = {
    getWordColor: () => "#6a74c9",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onWordClick: (e: any) => {
      setText(e.text);
    },
  };

  const options: Optional<Options> = {
    rotations: 2,
    rotationAngles: [0, 0],
    padding: 10,
    enableTooltip: false,
    fontWeight: "300",
    fontSizes: [10, 80],
    fontFamily: "Pretendard",
  };

  return (
    <Container>
      {wordCloud && (
        <ReactWordcloud
          words={wordCloud.map(item => ({ text: item.word, value: item.count }))}
          options={options}
          callbacks={callbacks}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90%;
`;
