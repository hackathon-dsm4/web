import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserDefault } from "@/assets/images";
import { HeartImg, Stack } from "@/components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FeedElement = ({ data }: any) => {
  const navigate = useNavigate();
  const moveToProfile = () => {
    navigate(`/mypage`);
  };

  const [moreBtn, setMoreBtn] = useState(false);
  const textLimit = useRef(170);

  const types = [
    { kor: "금융", eng: "FINANCE" },
    { kor: "증권", eng: "STOCK" },
    { kor: "산업/재계", eng: "INDUSTRY" },
    { kor: "중기/벤처", eng: "VENTURE" },
    { kor: "부동산", eng: "REAL_ESTATE" },
    { kor: "글로벌 경제", eng: "GLOBAL" },
    { kor: "생활경제", eng: "LIVING" },
    { kor: "경제 일반", eng: "GENERAL" },
  ];
  const kindKor = types.find(type => type.eng === "")?.kor || "기타";

  return (
    <Feed>
      <Stack padding="32px 32px" gap={20} align="center">
        <ProfileImg src={UserDefault} alt={"asdf"} onClick={moveToProfile} style={{ cursor: "pointer" }} />
        <Stack width="100%" direction="column" align="space-between">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div onClick={moveToProfile} style={{ fontWeight: 600, cursor: "pointer" }}>
              asdf
            </div>
            <HeartImg clicked={true} cnt={1} feedId="12" />
          </div>
          <Content>
            asdfasdf
            <More onClick={() => setMoreBtn(!moreBtn)}>
              {1 > textLimit.current && (moreBtn ? " [닫기]" : " ...더보기")}
            </More>
          </Content>
        </Stack>
      </Stack>
      <div style={{ width: "100%", height: "1px", backgroundColor: "#cacaca" }} />
      <Article to={`/news/${"asdf"}`}>
        <Label>{kindKor}</Label>
        asdf
      </Article>
    </Feed>
  );
};

const Feed = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid #cacaca;
  background-color: #fff;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 8px;
  text-align: justify;
  line-height: 24px;
`;

const More = styled.span`
  color: gray;
  cursor: pointer;
`;

const Article = styled(Link)`
  color: #cacaca;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
`;

const Label = styled.div`
  background-color: #a01d1d;
  width: 88px;
  height: 36px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
