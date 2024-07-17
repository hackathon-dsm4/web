import styled from "styled-components";
import { ArticleRank, FeedElement, MyPageSearch, Stack, UserElement } from "@/components";

export const Feed = () => {
  return (
    <Stack width="calc(100% - 276px)" margin="0 0 0 276px" padding="40px 100px" justify="space-between">
      <Wrapper>
        <MyPageSearch />
        <FeedContainer>
          {[""].map(data => {
            return <FeedElement data={data} key={data} />;
          })}
        </FeedContainer>
      </Wrapper>
      <BannerContainer>
        <ArticleRank />
      </BannerContainer>
    </Stack>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 65%;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  width: 30%;
`;
