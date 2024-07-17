import styled from "styled-components";
import { TabsType, MyPageTab } from "@/components";

export const MyPageTabs = ({ tabs }: { tabs: TabsType[] }) => {
  return (
    <TabContainer>
      <RadioInputs>
        {tabs.map((tab, index) => (
          <MyPageTab key={index} tabName={tab.tabName} />
        ))}
      </RadioInputs>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  width: 100%;
`;

const RadioInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
