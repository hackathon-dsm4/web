/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HeartImg } from "@/components";

export const FeedBannerElement = ({ data, isLast }: any) => {
  const navi = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <ProfileContainer onClick={() => {}}>
        <ProfileImg src={data ? data.profileImg : "/images/user/user_default.png"} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.25rem",
          }}
        >
          <div style={{ fontSize: "1rem", color: "#cacaca", fontWeight: 500 }}>{data.nickname}</div>
          <div style={{ fontSize: "0.75rem", color: "#cacaca", fontWeight: 400 }}>{data.createdAt}</div>
        </div>
        <HeartImg clicked={data.isHeart} cnt={data.heart} feedId={data.feedId} />
      </ProfileContainer>
      <div>{data.content}</div>
      {isLast ? (
        ""
      ) : (
        <div
          style={{
            width: "100%",
            height: "1px",
            margin: "1rem 0",
            backgroundColor: "#cacaca",
          }}
        />
      )}
    </div>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;
