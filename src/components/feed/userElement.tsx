/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import styled from "styled-components";

export const UserElement = ({ user, myId }: any) => {
  return (
    <UserContainer onClick={() => {}}>
      <ProfileImg src={""} style={{ cursor: "pointer" }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 500, cursor: "pointer" }}>{user ? user.nickname : user.userName}</div>
        <div style={{ fontSize: "0.875rem", color: "#cacaca" }}>{user.statusMsg}</div>
      </div>
      {true ? (
        <Button
          style={{
            backgroundColor: "#125532",
            color: "white",
            fontFamily: "Pretendard",
            borderRadius: "1rem",
            padding: "0.375rem 1rem",
            height: "2.25rem",
          }}
          onClick={() => {}}
        >
          팔로우
          <img src="/icons/feed/ic_account_plus.svg" alt="팔로우" style={{ marginLeft: "0.375rem" }} />
        </Button>
      ) : (
        <Button
          style={{
            backgroundColor: "#cacaca",
            color: "white",
            fontFamily: "Pretendard",
            borderRadius: "1rem",
            padding: "0.375rem 1rem",
            height: "2.25rem",
          }}
          onClick={() => {}}
        >
          언팔로우
          <img src="/icons/feed/ic_account_minus.svg" alt="팔로우" style={{ marginLeft: "0.375rem" }} />
        </Button>
      )}
    </UserContainer>
  );
};

const UserContainer = styled.div`
  border-radius: 1rem;
  background-color: white;
  border: 1px solid #cacaca;
  padding: 2rem;
  flex: 1;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;
