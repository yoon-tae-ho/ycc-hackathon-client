import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useMutation } from "react-query";
import { mileageLecture, mileageState } from "../atoms";
import { postMileage } from "../apis";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.nav`
  width: 100%;
  padding: 10px 150px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

const MileageDetail = () => {
  const lecture = useRecoilValue(mileageLecture);
  const mileageObj = useRecoilValue(mileageState);
  const { mutate } = useMutation(postMileage);

  useEffect(() => {
    mutate({ lecture, mileageObj });
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>{lecture.title}</Title>
      </Header>
    </Wrapper>
  );
};

export default MileageDetail;
