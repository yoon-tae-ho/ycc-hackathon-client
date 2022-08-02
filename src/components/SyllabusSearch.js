import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCampuses, fetchMajorAreas } from "../apis";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { syllabusLecture, syllabusLectureReady } from "../atoms";
import LectureRow from "./LectureRow";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 50px 15% 0 15%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #0166b2;
  margin-bottom: 18px;
`;

const Select = styled.select`
  width: 180px;
  padding: 1px;
`;

const Icon = styled.i`
  font-size: 22px;
  padding: 5px;
  color: #0166b2;
  cursor: pointer;
`;

const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  margin-top: 70px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 180px;
  padding: 1px;
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
`;

const Lectures = styled.ul`
  width: 100%;
  height: 100%;
`;

const SyllabusSearch = () => {
  const { isLoading: campusLoading, data: campuses } = useQuery(
    ["campuses"],
    fetchCampuses
  );
  const { isLoading: majorAreasLoading, data: majorAreas } = useQuery(
    ["majorAreas"],
    fetchMajorAreas
  );

  const { register, handleSubmit } = useForm();
  const campusRef = useRef();
  const majorAreaRef = useRef();
  const gradeRef = useRef();

  const [lecture, setLecture] = useRecoilState(syllabusLecture);
  const [lectureReady, setLectureReady] = useRecoilState(syllabusLectureReady);

  const onSubmit = (data) => {
    const campusValue = campusRef.current.value;
    const { subjectTitle } = data;

    if (campusValue.includes("연세")) {
      const yon_subject = {
        title: "의류디자인",
        subnum: "CNT2120-01",
        credit: "3",
        professor: "조현승",
        time: "월6,7,8,9 ",
      };
      setLecture(yon_subject);
      setLectureReady(true);
    } else {
      const kor_subject = {
        title: "경영정보시스템",
        subnum: "BUSS215",
        credit: 3,
        professor: "홍세준",
        time: "월(1) 수(1)",
      };
      setLecture(kor_subject);
      setLectureReady(true);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Column>
            <Name>캠퍼스</Name>
            <Select ref={campusRef} name="campus">
              {!campusLoading &&
                campuses.map((campus) => (
                  <option key={campus._id} value={campus.name}>
                    {campus.name}
                  </option>
                ))}
            </Select>
          </Column>
          <Column>
            <Name>전공/영역</Name>
            <Select ref={majorAreaRef} name="area">
              {!majorAreasLoading &&
                majorAreas.map((majorArea) => (
                  <option key={majorArea._id} value={majorArea.name}>
                    {majorArea.name}
                  </option>
                ))}
            </Select>
          </Column>
          <Column>
            <Name>학년</Name>
            <Select ref={gradeRef} name="grade">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Select>
          </Column>
          <Column>
            <Name>교과목명</Name>
            <Input {...register("subjectTitle", { required: true })} />
          </Column>
          <Column>
            <Btn>
              <Icon className="fas fa-search"></Icon>
            </Btn>
          </Column>
        </Header>
      </Form>
      <Main>
        {lectureReady && (
          <Lectures>
            <LectureRow
              a="학점"
              b="학정번호"
              c="교과목명"
              d="교수"
              e="강의시간"
            />
            <LectureRow
              a={lecture.credit}
              b={lecture.subnum}
              c={lecture.title}
              d={lecture.professor}
              e={lecture.time}
            />
          </Lectures>
        )}
      </Main>
    </Wrapper>
  );
};

export default SyllabusSearch;
