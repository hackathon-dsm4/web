import { Search } from "@/assets/images";
import { useState } from "react";
import styled from "styled-components";

export const MyPageSearch = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <SearchContainer>
      <SearchBox value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="검색어를 입력하세요" />
      <SearchImg src={Search} alt="검색 버튼" height={24} />
    </SearchContainer>
  );
};

const SearchImg = styled.img`
  position: absolute;
  left: 10px;
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
  background-color: #fff;
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
