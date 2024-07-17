import styled from "styled-components";
import { Link } from "react-router-dom";
import { KeywordByWordResponse, QueryListType } from "@/apis";
import { NewsType } from "@/@types";

type PropsType = {
  article: KeywordByWordResponse;
  isLast: boolean;
};

export const Article = ({ article, isLast }: PropsType) => {
  return (
    <Container>
      <Link to={`/news/${article.queryList[0].id}`} style={{ color: "black" }}>
        <Box>
          <div>
            <div style={{ paddingBottom: "10px" }}>
              <span style={{ color: "navy", fontWeight: "700", paddingRight: "10px", display: "inline" }}>
                {article.queryList[0].job || "중앙일보"}
              </span>
              <span style={{ color: "#cacaca", display: "inline" }}>{NewsType[article.queryList[0].type]}</span>
            </div>
            <div>{article.queryList[0].content.slice(0, 22)}...</div>
          </div>
          <div>
            <img
              src={article.queryList[0].profile}
              alt=""
              style={{ width: "80px", height: "60px", borderRadius: "0.5em" }}
            />{" "}
          </div>
        </Box>
      </Link>
      {!isLast && <Hr />}
    </Container>
  );
};

const Container = styled.div`
  height: 110px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between; /* 요소들을 양쪽으로 붙입니다 */
  align-items: center; /* 요소들을 수직 가운데로 정렬합니다 */
  padding-bottom: 10px;
`;

const Hr = styled.hr`
  background: #cacaca;
  height: 1px;
  border: 0;
`;
