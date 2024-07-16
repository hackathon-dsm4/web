import { useRef } from "react";
import styled from "styled-components";
import { Article } from "@/components";

export const Articles = () => {
  const target = useRef(null);

  return (
    <Container>
      <Title>asdf</Title>
      <Row id="scrollArea">
        {[].length === 0
          ? null
          : [].map((article, index) => (
              <Article key={index} articleId={1} title={""} thumbnail={""} kind={""} company={""} />
            ))}
        {[].length === 0 ? (
          "No Content"
        ) : (
          <div ref={target} style={{ opacity: "0", height: "30px", width: "100%", backgroundColor: "red" }} />
        )}
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
  padding: 1% 3%;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Row = styled.div`
  margin-top: 100px;
  overflow-y: scroll;
  max-height: 80%;
`;
