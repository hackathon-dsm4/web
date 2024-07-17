import styled from "styled-components";
import { type TabsType, MyPageSearch, MyPageTabs } from "@/components";

export default function MyPageLeftTop({ tabs }: { tabs: TabsType[] }) {
  return (
    <LeftTopContainer>
      <MyPageTabs tabs={tabs} />
      <MyPageSearch />
    </LeftTopContainer>
  );
}

const LeftTopContainer = styled.div`
  display: flex;
  align-items: center;
  top: 0px;
  width: 100%;
`;
