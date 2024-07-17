import { useGetMyNotice } from "@/apis";
import { FeedElement, NoContentComponent } from "@/components";
import { useMyPage } from "@/stores";
import styled from "styled-components";

export const MyPageFeed = () => {
  const { data } = useGetMyNotice();
  const { keyword } = useMyPage();

  return (
    <FeedContainer>
      {data?.length ? (
        <FeedWrapper>
          {data
            .filter(item => item.title.includes(keyword) || item.content.includes(keyword))
            .map((item, idx) => {
              return <FeedElement item={item} key={idx} />;
            })}
        </FeedWrapper>
      ) : (
        <NoContentComponent text="피드가 존재하지 않습니다." />
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
