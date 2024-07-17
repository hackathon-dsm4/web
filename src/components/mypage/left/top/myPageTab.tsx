import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

type PropsType = {
  tabName: string;
};

export const MyPageTab = ({ tabName }: PropsType) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const select = (): boolean => {
    if (tab) {
      return tab === (tabName === "피드" ? "feed" : "scrap");
    } else {
      return tabName === "피드" ? true : false;
    }
  };

  return (
    <Radio
      onClick={() => {
        navigate(`/mypage?tab=${tabName === "피드" ? "feed" : "scrap"}`);
      }}
      $isSelect={select()}
    >
      <span className="name">{tabName}</span>
    </Radio>
  );
};

const Radio = styled.div<{ $isSelect: boolean }>`
  text-align: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  padding: 0.5rem 0;
  color: ${({ $isSelect }) => ($isSelect ? "#6a74c9" : "#2a2b2e")};
  font-size: 1rem;
  width: 4rem;
  font-weight: 700;
  border-bottom: 2px solid ${({ $isSelect }) => ($isSelect ? "#6a74c9" : "transparent")};
`;
