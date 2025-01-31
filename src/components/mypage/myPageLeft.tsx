import styled from "styled-components";
import MyPageLeftTop from "./left/myPageLeftTop";
import { type ReactNode } from "react";
import { MyPageFeed, MyPageScrap } from "@/components";
import { useSearchParams } from "react-router-dom";

export type TabsType = { no: number; tabName: string; check: boolean; content: ReactNode };

export const MyPageLeft = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const select = (tabName: string): boolean => {
    if (tab) {
      return tab === (tabName === "피드" ? "feed" : "scrap");
    } else {
      return tabName === "피드" ? true : false;
    }
  };

  const tabs = [
    { no: 0, tabName: "피드", check: true, content: <MyPageFeed /> },
    {
      no: 1,
      tabName: "스크랩",
      check: false,
      content: <MyPageScrap />,
    },
  ];

  return (
    <LeftContainer>
      <MyPageLeftTop tabs={tabs} />
      {tabs.find(item => select(item.tabName))?.content}
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
