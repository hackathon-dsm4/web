import styled, { css } from "styled-components";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { Search, SelectVoca } from "@/assets/images";

export const Dictionary = () => {
  const category = ["경영", "경제", "공공", "과학", "금융", "사회"];
  const [wordArr, setWordArr] = useState([]);
  const [type, setType] = useState("");
  const [currentWord, setCurrentWord] = useState({ word: "" });
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  return (
    <MainContainer>
      <ListContainer>
        <CatContainer>
          <Tag $isSelect={true}>전체</Tag>
          {category.map((v, i) => (
            <Tag $isSelect={false} key={i + 1} onClick={() => setType(v)}>
              {v}
            </Tag>
          ))}
        </CatContainer>
        <SearchContainer>
          <SearchBox value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" />
          <SearchImg src={Search} alt="검색 버튼" height={24} />
        </SearchContainer>
        <div className="wordlist">
          {wordArr.map((v, i) => (
            <WordContainer key={i} onClick={() => setCurrentWord(v)}>
              <WordCat>{"fasdf"}</WordCat>
              <div>{"asd"}</div>
            </WordContainer>
          ))}
        </div>
        <Pagination
          count={totalPage}
          onChange={(e, value) => setCurrentPage(value)}
          page={currentPage}
          defaultPage={1}
        />
      </ListContainer>
      <DetailContainer>
        {currentWord.word === "" ? (
          <>
            <img src={SelectVoca} alt="" />
            <div
              style={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#2A2B2E",
              }}
            >
              선택된 단어가 없습니다.
            </div>
          </>
        ) : (
          <>
            <div>
              <WordCat
                style={{
                  width: "64px",
                  height: "28px",
                  fontSize: "20px",
                }}
              >
                asdf
              </WordCat>
              <div className="word" style={currentWord.word.length > 30 ? { fontSize: "24px" } : {}}>
                {currentWord.word}
              </div>
            </div>
            <div className="meaning">asdf</div>
          </>
        )}
      </DetailContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 276px;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  padding: 28px 40px;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  width: 507px;
  height: 618px;
  border-radius: 8px;
  border: 1px solid #dfe0e5;
  margin-right: 48px;
  .wordlist {
    margin-bottom: 12px;
    height: 457px;
  }
`;

const SearchImg = styled.img`
  position: absolute;
  left: 10px;
`;

const CatContainer = styled.div`
  margin: 16px 0 12px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Tag = styled.div<{ $isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;

  cursor: pointer;
  ${({ $isSelect }) =>
    $isSelect &&
    css`
      background-color: #6a74c9;
      color: white;
    `}
`;

const DetailContainer = styled.div`
  box-sizing: border-box;
  padding: 54px 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  width: 507px;
  height: 618px;
  border-radius: 16px;
  border: 1px solid #dfe0e5;
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 44px;
  }
  .word {
    font-size: 32px;
    color: #2a2b2e;
    font-weight: 600;
    margin-left: 24px;
  }
  .meaning {
    font-size: 14px;
    color: #494a4e;
    overflow-y: auto;
    text-align: justify;
  }
  img {
    width: 240px;
    height: 240px;
  }
`;

const SearchContainer = styled.div`
  box-sizing: border-box;
  padding-left: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #6a74c9;
  border-radius: 4px;
  position: relative;
`;

const SearchBox = styled.input`
  flex-grow: 5;
  height: 90%;
  border: none;
  outline: none;
  font-size: 14px;
`;

const WordContainer = styled.button`
  display: flex;
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: 12px;
  align-items: center;
  width: 466px;
  height: 55px;
  max-height: 55px;
  border-radius: 16px;
  background-color: #eff4ff;
  box-shadow: 2px 2px 8px #c9cad1;
  & > div:last-child {
    color: #2a2b2e;
    font-size: 14px;
    font-weight: 600;
  }
  &:focus {
    border: 1px solid #6a74c9;
  }
  cursor: pointer;
`;

const WordCat = styled.button`
  margin-right: 16px;
  border: none;
  color: #2a2b2e;
  font-size: 12px;
  width: 64px;
  min-width: 64px;
  height: 28px;
  border-radius: 12px;
  background-color: #d0d1ff;
`;
