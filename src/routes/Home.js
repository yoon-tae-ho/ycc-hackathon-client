import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-left: 100px;
  margin-right: 100px;
  font-size: 30px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Link to="/mileage">
        <LogoImg src="https://blog.kakaocdn.net/dn/duLJME/btrcNmQxexO/DwhAMzJbiub9t8YyWFqKS1/img.png" />
      </Link>
      <Icon className="fas fa-times"></Icon>
      <Link to="/syllabus">
        <LogoImg src="https://mblogthumb-phinf.pstatic.net/20160902_149/by267_1472797234424dWVs4_JPEG/%B0%ED%B7%C1%B4%EB%C7%D0%B1%B3_%B7%CE%B0%ED-01.jpg?type=w800" />
      </Link>
    </Wrapper>
  );
};

export default Home;
