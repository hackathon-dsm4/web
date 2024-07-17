import { useFeedLike } from "@/apis/like";
import { EmptyHeart, Heart } from "@/assets/images";
import { useState } from "react";
import styled from "styled-components";

type PropsType = {
  clicked: boolean;
  cnt: number;
  feedId: number;
};

export const HeartImg = ({ clicked, cnt, feedId }: PropsType) => {
  const { mutate } = useFeedLike(feedId);
  return (
    <HeartContainer
      onClick={() => {
        mutate();
      }}
    >
      {clicked ? <Img src={Heart} alt="좋아요" /> : <Img src={EmptyHeart} alt="좋아요" />}
      {cnt}
    </HeartContainer>
  );
};

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #cacaca;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
