import { styled } from "styled-components";
import ReactWordcloud, { Optional, Options } from "react-wordcloud";

export const WordCloudWords = () => {
  // const [words, setWords] = useState([]);

  const words = [
    {
      text: "식스틴",
      value: 64,
    },
    {
      text: "암스틸",
      value: 400,
    },
    {
      text: "캡사이신",
      value: 100,
    },
    {
      text: "설탕",
      value: 30,
    },
    {
      text: "소금",
      value: 64,
    },
    {
      text: "초장",
      value: 400,
    },
    {
      text: "쌈장",
      value: 100,
    },
    {
      text: "오이고추",
      value: 30,
    },
    {
      text: "청양고추",
      value: 64,
    },
    {
      text: "라면",
      value: 400,
    },
    {
      text: "물고기",
      value: 100,
    },
    {
      text: "꼬치",
      value: 30,
    },
    {
      text: "어묵",
      value: 64,
    },
    {
      text: "순대",
      value: 400,
    },
    {
      text: "떡볶이",
      value: 100,
    },
    {
      text: "시래기",
      value: 30,
    },
    {
      text: "깻잎",
      value: 64,
    },
    {
      text: "마늘",
      value: 400,
    },
    {
      text: "상추",
      value: 100,
    },
    {
      text: "고기",
      value: 30,
    },
  ];

  const callbacks = {
    getWordColor: () => "#6a74c9",
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
      <ReactWordcloud words={words} options={options} callbacks={callbacks} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90%;
`;
