import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Dictionary, Feed, Home } from "@/assets/images";

export const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/news">
        <img src={Home} alt="news" />
        뉴스
      </StyledLink>
      <StyledLink to="/feed">
        <img src={Feed} alt="feed" />
        피드
      </StyledLink>
      <StyledLink to="/dictionary">
        <img src={Dictionary} alt="dictionary" />
        사전
      </StyledLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-size: 1rem;
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  color: #35383b;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 12px;

  &.active {
    color: #6a74c9;
    font-weight: 500;
    transition: 0.1s;
  }
  &:hover {
    color: #6a74c9;
    font-weight: 500;
    transition: 0.2s;
  }
`;
