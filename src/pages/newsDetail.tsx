import styled from "styled-components";

export const NewsDetail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
        height: "90vh",
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
                <div style={{ fontSize: "1.5rem", color: "#2A2B2E", fontWeight: 500 }}>임시뉴스 제목입니다.</div>
                <div style={{ fontSize: "0.9rem", color: "#A7A7AF", fontWeight: 400 }}>
                  기록한 날짜와 시간이 표시되는 곳 입니다.
                </div>
              </div>
              <HeartContainer>
                <img src="src/assets/images/ic_heart_empty.svg" alt="좋아요" />
              </HeartContainer>
            </HeaderContainer>

            <div style={{ minHeight: "2px", backgroundColor: "#dbdbdb" }} />
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

const HeartContainer = styled.div`
  color: #777986;
  cursor: pointer;
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
  height: 420px;
  width: 55vw;
  margin: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
