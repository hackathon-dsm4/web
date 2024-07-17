import styled from "styled-components";
import { ArticleRank, FeedElement, MyPageSearch, Stack } from "@/components";
import { useGetNotice } from "@/apis";
import { useForm } from "@/hooks";

export const Feed = () => {
  const { data } = useGetNotice();
  const { form, handleChange } = useForm({
    keyword: "",
  });

  return (
    <Stack width="calc(100% - 276px)" margin="0 0 0 276px" padding="40px 100px" justify="space-between">
      <Wrapper>
        <MyPageSearch value={form.keyword} handleChange={handleChange} />
        <FeedContainer>
          {data &&
            data
              .filter(item => item.content.includes(form.keyword) || item.title.includes(form.keyword))
              .map((item, idx) => {
                return <FeedElement item={item} key={idx} />;
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
  width: 60%;
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
  width: 35%;
`;
