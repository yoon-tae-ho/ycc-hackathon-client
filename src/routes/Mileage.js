import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mileageReadyState, mileageState, searchReadyState } from "../atoms";
import Form from "../components/MileageForm";
import SearchLecture from "../components/SearchLecture";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mileage = () => {
  const isMileageReady = useRecoilValue(mileageReadyState);
  const mileageObj = useRecoilValue(mileageState);
  const isSearchReady = useRecoilValue(searchReadyState);

  return (
    <Wrapper>
      {!isMileageReady ? <Form /> : !isSearchReady ? <SearchLecture /> : null}
    </Wrapper>
  );
};

export default Mileage;
