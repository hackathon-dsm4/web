import { Search } from "@/assets/images";
import styled from "styled-components";

type PropsType = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MyPageSearch = ({ value, handleChange }: PropsType) => {
  return (
    <SearchContainer>
      <SearchBox name="keyword" value={value} onChange={handleChange} placeholder="검색어를 입력하세요" />
      <SearchImg src={Search} alt="검색 버튼" height={24} />
    </SearchContainer>
  );
};

const SearchImg = styled.img`
  position: absolute;
  left: 10px;
`;

const SearchContainer = styled.div`
  padding-left: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  border: 1px solid #cacaca;
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
