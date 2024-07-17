import styled from "styled-components";
import { Article } from "@/components";
import { useGetKeywordByNew } from "@/apis";
import { useNewsCategory } from "@/stores";

export const Articles = () => {
  const { date, category, text } = useNewsCategory();
  const { data, isLoading } = useGetKeywordByNew(date, category, text);

  return (
    <Container>
      <Title>{text}</Title>
      <Row>
        {data && data?.length
          ? data.map((article, index) => <Article key={index} isLast={data.length - 1 === index} article={article} />)
          : !isLoading && "No Content"}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 38%;
  border: 1px solid #cacaca;
  background-color: #fff;
  border-radius: 16px;
  margin-top: 1% 0;
  color: #cccccc;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  color: #000;
  font-weight: 600;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
`;
