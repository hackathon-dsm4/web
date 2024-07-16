import styled from "styled-components";

export const Discription = () => {
  return (
    <div>
      <ContentContainer>
        <Span>{"["}</Span>
        <ContentContainerText>{"FOCUS : "}</ContentContainerText>
        <ContentWrapper>
          <ContentContainerList>
            <ContentContainerListItem>NEWS</ContentContainerListItem>
            <ContentContainerListItem>FEED</ContentContainerListItem>
            <ContentContainerListItem>DICT</ContentContainerListItem>
          </ContentContainerList>
        </ContentWrapper>
        <Span>{"]"}</Span>
      </ContentContainer>
    </div>
  );
};

const Span = styled.span`
  margin-top: -6px;
  color: #6a74c9;
  -webkit-animation-name: opacity;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  animation-name: opacity;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  font-size: 70px;
  gap: 20px;
`;

const ContentContainerText = styled.div`
  display: inline;
  float: left;
  margin: 0;
`;

const ContentWrapper = styled.div`
  height: 70px;
  overflow: hidden;
`;

const ContentContainerList = styled.div`
  margin-top: 6px;
  text-align: center;
  list-style: none;
  overflow: hidden;
  -webkit-animation-name: change;
  -webkit-animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  color: #323762;

  @keyframes change {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }

    25% {
      transform: translate3d(0, -33.33%, 0);
    }

    50% {
      transform: translate3d(0, -66.66%, 0);
    }

    75% {
      transform: translate3d(0, -33.33%, 0);
    }
  }
`;

const ContentContainerListItem = styled.div`
  line-height: 70px;
  margin: 0;
`;
