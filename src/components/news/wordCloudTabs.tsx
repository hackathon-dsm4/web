import { NewsKeyType } from "@/@types";
import { useNewsCategory } from "@/stores";
import styled, { css } from "styled-components";

export const WordCloudTabs = () => {
  const types = [
    { kor: "금융", eng: "FINANCE" },
    { kor: "증권", eng: "STOCK" },
    { kor: "산업/재계", eng: "INDUSTRY" },
    { kor: "중기/벤처", eng: "VENTURE" },
    { kor: "부동산", eng: "REAL_ESTATE" },
    { kor: "글로벌 경제", eng: "GLOBAL" },
    { kor: "생활경제", eng: "LIVING" },
    { kor: "경제 일반", eng: "GENERAL" },
  ];

  const { category, setCategory, resetText } = useNewsCategory();

  return (
    <Container>
      {types.map((type, idx) => (
        <Tag
          key={idx}
          $isSelect={category === type.eng}
          onClick={() => {
            setCategory(type.eng as NewsKeyType);
            resetText();
          }}
        >
          {type.kor}
        </Tag>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 4px;
  margin: 20px 0 0 16px;
`;

const Tag = styled.div<{ $isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;

  cursor: pointer;
  ${({ $isSelect }) =>
    $isSelect &&
    css`
      background-color: #6a74c9;
      font-weight: 600;
      color: white;
    `}
`;
