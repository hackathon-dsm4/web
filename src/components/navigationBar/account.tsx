import { UserDefault } from "@/assets/images";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack } from "../common";

export const Account = () => {
  return (
    <Stack direction="column" gap={32}>
      <Divider />
      <StyledLink to="/mypage">
        {"" != null && "" != "" ? (
          <img src={UserDefault} alt="profileImg" width={20} height={20} style={{ borderRadius: "50%" }} />
        ) : (
          <img src={UserDefault} alt="profileImg" width={20} height={20} />
        )}
        asdfasdf
      </StyledLink>
      {"" != null && "" != "" ? <Button onClick={() => {}}>로그아웃</Button> : null}
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

const Button = styled.button`
  position: absolute;
  transform: translate(170%, -80%);
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0.7em 2em;
  border: none;
  background: white;
  color: #ccc;
  &:hover {
    color: black;
    transition: 0.5s;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ededed;
`;
