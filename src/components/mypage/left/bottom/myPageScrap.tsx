import styled from "styled-components";
import { Pagination } from "@mui/material";
import { NoContentComponent, ScrapComponent, Stack } from "@/components";

export const MyPageScrap = () => {
  return (
    <ScrapContainer>
      {false ? (
        <NoContentComponent text={"스크랩한 기사가 존재하지 않습니다."} />
      ) : (
        <Container>
          <ScrapWrapper>
            <Scraps>
              {Array.from({ length: 7 }, (scrap, idx) => (
                <ScrapComponent key={idx} deleteScrap={""} scrapId={""} articleId={""} image={""} title={""} />
              ))}
              {Array.from({ length: 5 }, (scrap, idx) => (
                <div key={idx} style={{ width: "170px" }} />
              ))}
            </Scraps>
          </ScrapWrapper>
          <Stack width="100%" justify="center" margin="32px 0">
            <Pagination count={10} page={1} onChange={(event, value) => {}} />
          </Stack>
        </Container>
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
