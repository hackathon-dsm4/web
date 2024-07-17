import { useGetNewsDetail, useNewsLike, usePostNotice } from "@/apis";
import { EmptyHeart, Heart, Plus, Search } from "@/assets/images";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { HeartImg, Stack, Text } from "@/components";
import { useForm } from "@/hooks";

export const NewsDetail = () => {
  const params = useParams();
  const { form, handleChange, setForm } = useForm({
    value: "",
  });
  const { data } = useGetNewsDetail(+params.id!);

  const { mutate: likeMutate } = useNewsLike(+params.id!);
  const { mutate: postNoticeMutate, isPending } = usePostNotice({ id: +params.id!, content: form.value }, setForm);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        marginLeft: "276px",
        minHeight: "90vh",
      }}
    >
      <Main>
        <BannerContainer>
          <FeedListContainer>
            <HeaderContainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "1.5rem", color: "#2A2B2E", fontWeight: 500 }}>{data?.title}</div>
                <div style={{ fontSize: "0.9rem", color: "#A7A7AF", fontWeight: 400, marginTop: "10px" }}>
                  {dayjs(data?.pubDate).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}
                </div>
              </div>
              <HeartContainer
                onClick={() => {
                  likeMutate();
                }}
              >
                {data?.click ? <Img src={Heart} alt="좋아요" /> : <Img src={EmptyHeart} alt="좋아요" />}
              </HeartContainer>
            </HeaderContainer>
            <div style={{ minHeight: "2px", backgroundColor: "#dbdbdb", marginBottom: "20px" }} />
            <Text size={16} lineHeight={100}>
              {data?.description}
            </Text>
            <Stack
              width="100%"
              justify="flex-end"
              margin="40px 0"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(data?.originallink);
              }}
            >
              <Text size={14} color="blue">
                {"< 원본보기"}
              </Text>
            </Stack>
            <div style={{ minHeight: "2px", backgroundColor: "#dbdbdb", marginBottom: "20px" }} />
            <NoticeWrapper>
              <SearchContainer>
                <SearchBox
                  name="value"
                  value={form.value}
                  onChange={handleChange}
                  placeholder="댓글을 입력하세요"
                  onKeyUp={e => {
                    if (e.key === "Enter" && !isPending) {
                      postNoticeMutate();
                    }
                  }}
                />
                <SearchImg
                  src={Plus}
                  alt="버튼"
                  height={24}
                  onClick={() => {
                    !isPending && postNoticeMutate();
                  }}
                />
              </SearchContainer>
              {!!data?.notices.length &&
                data?.notices.map((item, idx) => (
                  <Feed key={idx}>
                    <Stack padding="20px" gap={20} align="center">
                      <ProfileImg src={item.userProfile} alt="" style={{ cursor: "pointer" }} />
                      <Stack width="100%" direction="column" align="space-between">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <div style={{ fontWeight: 600, cursor: "pointer" }}>{item.userName}</div>
                          <HeartImg clicked={item.click} cnt={item.count} feedId={item.id} />
                        </div>
                        <Content>{item.content}</Content>
                      </Stack>
                    </Stack>
                  </Feed>
                ))}
            </NoticeWrapper>
          </FeedListContainer>
        </BannerContainer>
      </Main>
    </div>
  );
};

const Main = styled.div`
  background-color: #ffff;
  width: 55vw;
  border-radius: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #cacaca;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: sticky;
`;

const FeedListContainer = styled.div`
  display: "flex";
  justify-content: "center";
  width: 55vw;
  margin: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feed = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid #cacaca;
  background-color: #fff;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
`;

const Content = styled.div`
  margin-top: 8px;
  text-align: justify;
  line-height: 24px;
`;

const SearchImg = styled.img`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 0 40px 0 16px;
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
