import { FeedElement, NoContentComponent } from "@/components";
import styled from "styled-components";

export const MyPageFeed = () => {
  return (
    <FeedContainer>
      {false ? (
        <NoContentComponent text="피드가 존재하지 않습니다." />
      ) : (
        <FeedWrapper>
          {["", ""].map(data => {
            return <FeedElement data={data} key={data} />;
          })}
        </FeedWrapper>
      )}
    </FeedContainer>
  );
};

const FeedContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
