import { Link } from "react-router-dom";
import styled from "styled-components";
import { Account, NavBar, Stack } from "@/components";
import { Logo } from "@/assets/images";

export const NavigationBar = () => {
  return (
    <Bar>
      <Stack direction="column" gap={40}>
        <Link to="/news">
          <img src={Logo} alt="Visible Hand" width={200} />
        </Link>
        <NavBar />
      </Stack>
      <Account />
    </Bar>
  );
};

const Bar = styled.div`
  width: 276px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 64px;
  position: fixed;
  background-color: white;
  border-right: 1px solid #ededed;
  z-index: 1;
`;
