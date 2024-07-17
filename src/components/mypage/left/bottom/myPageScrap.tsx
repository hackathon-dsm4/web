import styled from "styled-components";
import { Pagination } from "@mui/material";
import { NoContentComponent, ScrapComponent, Stack } from "@/components";
import { useGetMyShare } from "@/apis";
import { useState } from "react";
import { useMyPage } from "@/stores";

export const MyPageScrap = () => {
  const { data } = useGetMyShare();
  const [page, setPage] = useState<number>(1);
  const { keyword } = useMyPage();

  return (
    <ScrapContainer>
      {data?.length ? (
        <Container>
          <ScrapWrapper>
            <Scraps>
              {data
                ?.filter(item => item.title.includes(keyword))
                .map((scrap, idx) => <ScrapComponent key={idx} scrap={scrap} />)}
              {Array.from({ length: 5 }, (_, idx) => (
                <div key={idx} style={{ width: "170px" }} />
              ))}
            </Scraps>
          </ScrapWrapper>
          <Stack width="100%" justify="center" margin="32px 0">
            <Pagination
              count={data?.length}
              page={page}
              onChange={(_, value) => {
                setPage(value);
              }}
            />
          </Stack>
        </Container>
      ) : (
        <NoContentComponent text={"스크랩한 기사가 존재하지 않습니다."} />
      )}
    </ScrapContainer>
  );
};

const ScrapContainer = styled.div`
  flex-wrap: wrap;
  width: 100%;
`;

const Scraps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const ScrapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  border: 1px solid #cacaca;
  background-color: #fff;
  border-radius: 8px;
`;
