import styled from "styled-components";
import MyPageRightTop from "./right/myPageRightTops";
import MyPageRightCenter from "./right/MyPageRightCenter";
import MyPageRightBottom from "./right/MyPageRightBottom";
export default function MyPageRight() {
  const userId = useSelector(state => state.mypageTab.userId);
  return (
    <RightContainer>
      <MyPageRightTop userId={userId} />
      <MyPageRightCenter userId={userId} />
      <MyPageRightBottom userId={userId} />
    </RightContainer>
  );
}

const RightContainer = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-weight: 600;
  position: sticky;
  align-self: flex-start;
  top: 40px;
`;
