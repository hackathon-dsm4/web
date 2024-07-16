import styled from "styled-components";
import MyPageTabs from "components/user/mypage/left/top/MyPageTabs";
import MypageSearch from "components/user/mypage/left/top/MypageSearch";
import { useNavigate } from "react-router-dom";
import { background } from "lib/style/colorPalette";

export const MyPageLeftTop = () => {
  const tabNo = useSelector(state => state.mypageTab.tabNo);
  const navi = useNavigate();

  return (
    <LeftTopContainer>
      <MyPageTabs tabs={tabs} />
      {tabNo != 2 ? <MypageSearch /> : <Button onClick={() => navi("/quiz/retry")}>다시 풀기</Button>}
    </LeftTopContainer>
  );
};

const LeftTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-self: flex-start;
  top: 0px;
  padding-top: 40px;
  background-color: ${background};
  width: 100%;
`;

const Button = styled.button`
  right: 2%;
  // position: absolute;
  align-items: center;
  text-align: center;
  width: 20%;
  height: 90%;

  font-weight: 700;
  background-color: white;
  color: black;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border: 1px solid lightgray;
  box-shadow: 0 0 0 0 black;
  &:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 2px 0 0 lightgray;
    color: #6a74c9;
  }
  // &:active {
  //     transform: translateY(2px) translateX(1px);
  //     box-shadow: 0 0 0 0 lightgray;
  // }
`;
