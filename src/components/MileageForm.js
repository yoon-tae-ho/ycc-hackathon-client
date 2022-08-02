import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { mileageReadyState, mileageState } from "../atoms";

const FormBox = styled.div`
  padding: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
`;

const SForm = styled.form`
  width: 350px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
`;

const Input = styled.input`
  height: 37px;
  padding: 0 7px;
  grid-column: span 2;
  font-size: 0.9em;
  outline: none;

  &[type="submit"] {
    margin-top: 10px;
    border: none;
    background-color: #0166b2;
    color: white;
  }
`;

const HalfInput = styled(Input)`
  grid-column: span 1;
`;

const MileageForm = () => {
  const { register, handleSubmit } = useForm();
  const setIsMileageReady = useSetRecoilState(mileageReadyState);
  const setMileageObj = useSetRecoilState(mileageState);

  const onSubmit = (data) => {
    const { a1, a2, b1, b2, grade, subjects } = data;
    setMileageObj({
      grade,
      subjects,
      a1,
      a2,
      b1,
      b2,
    });
    setIsMileageReady(true);
  };

  return (
    <FormBox>
      <LogoImg src="https://blog.kakaocdn.net/dn/duLJME/btrcNmQxexO/DwhAMzJbiub9t8YyWFqKS1/img.png" />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <HalfInput
          type="number"
          placeholder="총이수학점"
          {...register("a1", { required: true })}
        />
        <HalfInput
          type="number"
          placeholder="졸업이수학점"
          {...register("a2", { required: true })}
        />
        <Input
          type="number"
          placeholder="신청과목수"
          {...register("subjects", { required: true })}
        />
        <HalfInput
          type="number"
          placeholder="직전학기이수학점"
          {...register("b1", { required: true })}
        />
        <HalfInput
          type="number"
          placeholder="학기당수강학점"
          {...register("b2", { required: true })}
        />
        <Input
          type="number"
          placeholder="학년"
          {...register("grade", { required: true })}
        />
        <Input type="submit" value="Submit" />
      </SForm>
    </FormBox>
  );
};

export default MileageForm;
