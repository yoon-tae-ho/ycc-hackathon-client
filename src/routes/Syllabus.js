import styled from "styled-components";
import SyllabusSearch from "../components/SyllabusSearch";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Syllabus = () => {
  return (
    <Wrapper>
      <SyllabusSearch />
    </Wrapper>
  );
};

export default Syllabus;
