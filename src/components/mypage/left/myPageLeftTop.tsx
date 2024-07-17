import styled from "styled-components";
import { type TabsType, MyPageSearch, MyPageTabs } from "@/components";
import { useMyPage } from "@/stores";

export default function MyPageLeftTop({ tabs }: { tabs: TabsType[] }) {
  const { keyword, setKeyword } = useMyPage();

  return (
    <LeftTopContainer>
      <MyPageTabs tabs={tabs} />
      <MyPageSearch
        value={keyword}
        handleChange={e => {
          setKeyword(e.target.value);
        }}
      />
    </LeftTopContainer>
  );
}

const LeftTopContainer = styled.div`
  display: flex;
  align-items: center;
  top: 0px;
  width: 100%;
`;
