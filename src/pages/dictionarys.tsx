import styled from "styled-components";
import { useState } from "react";
import { Pagination } from "@mui/material";

export const Dictionary = () => {
  const category = ["경영", "경제", "공공", "과학", "금융", "사회"];
  const [wordArr, setWordArr] = useState([]);
  const [type, setType] = useState("");
  const [currentWord, setCurrentWord] = useState({ word: "" });
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const selected = {
    backgroundColor: `#EDF2FD`,
    color: `#ffff`,
  };
  const selectedWord = {
    border: `1px solid #6A74C9`,
  };

  return (
    <MainContainer>
      <ListContainer>
        <CatContainer>
          <CatItem>전체</CatItem>
          {category.map((v, i) => (
            <CatItem style={type === v ? selected : {}} key={i + 1} onClick={() => setType(v)}>
              {v}
            </CatItem>
          ))}
        </CatContainer>
        <SearchContainer>
          <SearchBox value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" />
          <button>
            <img src={"/icons/feed/ic_search.svg"} alt="검색 버튼" />
          </button>
        </SearchContainer>
        <div className="wordlist">
          {wordArr.map((v, i) => (
            <WordContainer style={currentWord === v ? selectedWord : {}} key={i} onClick={() => setCurrentWord(v)}>
              <WordCat>{v.type}</WordCat>
              <div>{v.word}</div>
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
            <img src={"/icons/quiz/selectVoca.png"} alt="" />
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
                {currentWord.type}
              </WordCat>
              <div className="word" style={currentWord.word.length > 30 ? { fontSize: "24px" } : {}}>
                {currentWord.word}
              </div>
            </div>
            <div className="meaning">{currentWord.meaning}</div>
          </>
        )}
      </DetailContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 70px;
  align-items: center;
  border-radius: 16px;
`;

const ListContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  width: 507px;
  height: 618px;
  border-radius: 16px;
  border: 1px solid #dfe0e5;
  margin-right: 36px;
  .wordlist {
    margin-bottom: 12px;
    height: 457px;
  }
`;

const CatContainer = styled.div`
  margin: 16px 0 12px;
  width: 466px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
`;

const CatItem = styled.button`
  width: 53px;
  height: 26px;
  border: 1px solid #6a74c9;
  background-color: #d0d1ff;
  border-radius: 16px;
  color: #6a74c9;
  font-size: 12px;
  &:focus {
    background-color: #6a74c9;
    color: #ffff;
  }
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
  padding: 0 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 466px;
  height: 36px;
  border: 1px solid #6a74c9;
  border-radius: 16px;
  button {
    border: none;
    background-color: transparent;
  }
`;

const SearchBox = styled.input`
  flex-grow: 5;
  height: 90%;
  border: none;
  outline: none;
  font-size: 12px;
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
