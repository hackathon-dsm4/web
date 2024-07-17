import { UserDefault } from "@/assets/images";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack } from "../common";
import { useGetUserInfo } from "@/apis";

export const Account = () => {
  const { data } = useGetUserInfo();

  return (
    <Stack direction="column" gap={32}>
      <Divider />
      <StyledLink to="/mypage">
        <img
          src={data ? data?.profile : UserDefault}
          alt="profileImg"
          width={20}
          height={20}
          style={{ borderRadius: "50%" }}
        />
        {data?.nickname}
      </StyledLink>
    </Stack>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  gap: 14px;
  align-items: center;
  text-decoration: none;
  color: #35383b;
  font-size: 1rem;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ededed;
`;
