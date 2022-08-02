import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { syllabusLecture } from "../atoms";

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

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  margin-top: 70px;
  padding: 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-content: center;
  place-content: center space-evenly;
`;

const Box = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Img = styled.img``;

const Name = styled.h2`
  display: block;
  height: 10%;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`;

const SyllabusDetail = () => {
  const lecture = useRecoilValue(syllabusLecture);
  const isYonsei = lecture.title === "의류디자인";
  return (
    <Wrapper>
      <Header>
        <Title>
          {lecture.title} {lecture.subnum}
        </Title>
      </Header>
      <Main>
        <Box>
          <a
            style={{ display: "block", width: "100%", height: "80%" }}
            href="http://ysweb.yonsei.ac.kr:8888/curri120601/curri_pop2.jsp?&hakno=CNT2002&bb=01&sbb=00&domain=H1&startyy=2022&hakgi=2&ohak=0901"
            target="_blank"
          ></a>
          <Name>UT세미나(패션시장과소비자욕구)</Name>
        </Box>
        <Box>
          <a
            style={{ display: "block", width: "100%", height: "80%" }}
            href="http://ysweb.yonsei.ac.kr:8888/curri120601/curri_pop2.jsp?&hakno=DSN4109&bb=01&sbb=00&domain=H1&startyy=2022&hakgi=2"
            target="_blank"
          ></a>
          <Name>패션디자인</Name>
        </Box>
        <Box>
          <a
            style={{ display: "block", width: "100%", height: "80%" }}
            href="http://ysweb.yonsei.ac.kr:8888/curri120601/curri_pop2.jsp?&hakno=DSN3113&bb=01&sbb=00&domain=H1&startyy=2022&hakgi=2&ohak=0905"
            target="_blank"
          ></a>
          <Name>패션디자인과제작기법</Name>
        </Box>
        <Box>
          <a
            style={{ display: "block", width: "100%", height: "80%" }}
            href="http://ysweb.yonsei.ac.kr:8888/curri120601/curri_pop2.jsp?&hakno=DSN4120&bb=01&sbb=00&domain=H1&startyy=2022&hakgi=2&ohak=0905"
            target="_blank"
          ></a>
          <Name>디자인비즈니스</Name>
        </Box>
      </Main>
    </Wrapper>
  );
};

export default SyllabusDetail;
