import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HeartImg, Stack } from "@/components";
import { NoticeResponse } from "@/apis";
import { NewsType } from "@/@types";

type PropsType = {
  item: NoticeResponse;
};

export const FeedElement = ({ item }: PropsType) => {
  const navigate = useNavigate();
  const moveToProfile = () => {
    navigate(`/mypage`);
  };

  return (
    <Feed>
      <Stack padding="32px 32px" gap={20} align="center">
        <ProfileImg src={item.userProfile} alt="" onClick={moveToProfile} style={{ cursor: "pointer" }} />
        <Stack width="100%" direction="column" align="space-between">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div onClick={moveToProfile} style={{ fontWeight: 600, cursor: "pointer" }}>
              {item.userName}
            </div>
            <HeartImg clicked={item.click} cnt={item.count} feedId={item.id} />
          </div>
          <Content>{item.content}</Content>
        </Stack>
      </Stack>
      <div style={{ width: "100%", height: "1px", backgroundColor: "#cacaca" }} />
      <Article to={`/news/${item.newsId}`}>
        <Label>{NewsType[item.type]}</Label>
        {item.title}
      </Article>
    </Feed>
  );
};

const Feed = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid #cacaca;
  background-color: #fff;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 8px;
  text-align: justify;
  line-height: 24px;
`;

const Article = styled(Link)`
  color: #cacaca;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
`;

const Label = styled.div`
  background-color: #6a74c9;
  width: 88px;
  height: 36px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
