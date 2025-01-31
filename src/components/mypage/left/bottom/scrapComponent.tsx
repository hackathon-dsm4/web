import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MyShareResponse } from "@/apis";

type PropsType = {
  scrap: MyShareResponse;
};

export const ScrapComponent = ({ scrap }: PropsType) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/news/${scrap.id}`);
      }}
    >
      <CardInner>
        <CardFront>
          <Image src={scrap.profile} />
          <Title>{scrap.title}</Title>
        </CardFront>
      </CardInner>
    </Card>
  );
};

const Image = styled.img`
  width: 140px;
  height: 80px;
  border-radius: 8px;
  cursor: pointer;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 140px;
  font-weight: bold;
  font-size: 0.5em;
  height: 20px;
`;

const Card = styled.div`
  width: 170px;
  height: 160px;
  perspective: 1000px;
  position: relative;
  text-align: center;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("/folder.png");
  padding: 36px 12px 12px 12px;
`;

const CardFront = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  font-size: 24px;
`;
