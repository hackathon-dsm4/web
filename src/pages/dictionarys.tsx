import styled, { css } from "styled-components";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { Search, SelectVoca } from "@/assets/images";
import { useGetDict } from "@/apis";
import { useNewsCategory } from "@/stores";
import { Dictcategory, DictType, NewsType } from "@/@types";
import { getValueByKey } from "@/utils";
import { Stack } from "@/components";

export const Dictionary = () => {
  const category = ["경영", "경제", "공공", "과학", "금융", "사회"];

  const [type, setType] = useState<DictType>("ETC");
  const [page, setPage] = useState<number>(1);

  const [keyword, setKeyword] = useState("");
  const [currentWord, setCurrentWord] = useState<{ type: DictType; word: string; meaning: string }>({
    type: "ETC",
    word: "",
    meaning: "",
  });

  const { data } = useGetDict(type);

  return (
    <MainContainer>
      <ListContainer>
        <CatContainer>
          <Tag $isSelect={Dictcategory[type] === "전체"} onClick={() => setType("ETC")}>
            전체
          </Tag>
          {category.map((v, i) => (
            <Tag
              $isSelect={Dictcategory[type] === v}
              key={i + 1}
              onClick={() => setType(getValueByKey(Dictcategory, v) as DictType)}
            >
              {v}
            </Tag>
          ))}
        </CatContainer>
        <SearchContainer>
          <SearchBox value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" />
          <SearchImg src={Search} alt="검색 버튼" height={24} />
        </SearchContainer>
        <div className="wordlist">
          {data
            ?.filter(item => item.word.includes(keyword))
            .slice((page - 1) * 6, page * 6)
            .map((v, i) => (
              <WordContainer
                key={i}
                onClick={() => {
                  setCurrentWord({
                    type: v.type,
                    word: v.word,
                    meaning: v.meaning,
                  });
                }}
              >
                <WordCat>{Dictcategory[v.type]}</WordCat>
                <div>{v.word}</div>
              </WordContainer>
            ))}
        </div>
        <Pagination
          count={Math.ceil((data?.length || 0) / 6)}
          onChange={(_, value) => setPage(value)}
          page={page}
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
            <Stack direction="column" gap={28}>
              <WordCat
                style={{
                  width: "64px",
                  height: "32px",
                  fontSize: "16px",
                }}
              >
                {Dictcategory[currentWord.type]}
              </WordCat>
              <div className="word" style={currentWord.word.length > 30 ? { fontSize: "24px" } : {}}>
                {currentWord.word}
              </div>
            </Stack>
            <div className="meaning">{currentWord.meaning}</div>
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
    width: 100%;
    height: 460px;
    overflow: scroll;
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
      background-color: #cacaca;
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
    margin-bottom: 28px;
  }
  .word {
    font-size: 32px;
    color: #2a2b2e;
    font-weight: 600;
  }
  .meaning {
    font-size: 14px;
    color: #494a4e;
    overflow-y: auto;
    text-align: justify;
    line-height: 20px;
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
  border: 1px solid #cacaca;
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
  padding: 0 12px;
  margin-bottom: 12px;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 4px;
  background-color: #eff4ff;
  border: 1px solid #eff4ff;
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
  height: 32px;
  border-radius: 4px;
  background-color: #d0d1ff;
  color: #6a74c9;
`;
