import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack, Text } from "@/components";
import { useGetAllNews } from "@/apis";
import { NewsType } from "@/@types";

export const ArticleRank = () => {
  const { data } = useGetAllNews();

  return (
    <Background style={{ gap: 14 }}>
      <BannerTitle>
        <span>현재 가장 핫한 기사</span>
      </BannerTitle>
      {data?.slice(0, 10).map((item, index) => {
        return (
          <React.Fragment key={index}>
            <BannerElement to={`/news/${item.id}`}>
              <span style={{ fontSize: "2.25rem", fontWeight: 500 }}>{index + 1}</span>
              <Stack direction="column" gap={2}>
                <Text size={16}>{item.title}</Text>
                <div style={{ color: "#cacaca", fontSize: "0.75rem" }}>
                  {item.job} | {NewsType[item.type]}
                </div>
              </Stack>
              <Thumbnail src={item.profile} alt={""} />
            </BannerElement>
            {index !== 9 && (
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
  color: #000;
`;

const BannerElement = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #cacaca;
`;
