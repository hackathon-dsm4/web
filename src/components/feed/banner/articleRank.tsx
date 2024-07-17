import { Clock } from "@/assets/images";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack, Text } from "@/components";

export const ArticleRank = () => {
  const [articles, setArticles] = useState([]);

  return (
    <Background style={{ gap: 14 }}>
      <BannerTitle>
        <span>피드에 많이 언급된 기사</span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "#cacaca",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={Clock} alt="시계" />
          최근 1시간
        </span>
      </BannerTitle>
      {["", "", ""].map((data, index) => {
        return (
          <React.Fragment key={data}>
            <BannerElement to={`/news/${data}`}>
              <span style={{ fontSize: "2.25rem", fontWeight: 500 }}>{index + 1}</span>
              <Stack direction="column" gap={2}>
                <Text size={16}>asdfasdfasdf</Text>
                <div style={{ color: "#cacaca", fontSize: "0.75rem" }}>asdfasdf | asdfasdfas</div>
              </Stack>
              {true ? <Thumbnail src={""} alt={data} /> : ""}
            </BannerElement>
            {index !== articles.length - 1 && (
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#cacaca",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </Background>
  );
};

const Thumbnail = styled.img`
  width: 5.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
`;

const Background = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #cacaca;
  display: flex;
  flex-direction: column;
  color: #cacaca;
  padding: 32px;
`;

const BannerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const BannerElement = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #cacaca;
`;
