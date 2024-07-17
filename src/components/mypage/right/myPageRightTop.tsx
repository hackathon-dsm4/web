import styled from "styled-components";
import { ColorSpan, Stack, Text } from "@/components";

export const MyPageRightTop = () => {
  const imgUrl = "https://visiblehand-bucket.s3.ap-northeast-2.amazonaws.com/user_default.png";

  return (
    <Background style={{ padding: "1.5rem", gap: "1.25rem" }}>
      <Div>
        <Image src={imgUrl} />
        <Stack direction="column" gap={12}>
          <NickName>박박박</NickName>
          <FollowInfo>
            <Text size={12} weight={500} color="#cacaca">
              팔로잉
              <ColorSpan color="#000"> {10}</ColorSpan>
            </Text>
            <Text size={12} weight={500} color="#cacaca">
              팔로워
              <ColorSpan color="#000"> {10}</ColorSpan>
            </Text>
          </FollowInfo>
        </Stack>
      </Div>
    </Background>
  );
};

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Background = styled.div`
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #cacaca;
  display: flex;
  flex-direction: column;
  color: #cacaca;
  padding: 32px;
  width: 20%;
  height: 160px;
  justify-content: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 1.25rem;
`;

const NickName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
`;

const FollowInfo = styled.div`
  display: flex;
  color: #cacaca;
  gap: 8px;
`;
