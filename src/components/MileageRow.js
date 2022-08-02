import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  font-weight: 400;
`;

const A = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
`;

const B = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
`;

const C = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
  font-weight: 500;
  cursor: pointer;
`;

const D = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
`;

const E = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  padding: 3px;
  box-sizing: border-box;
`;

const LectureRow = (arr) => {
  return (
    <Wrapper>
      <A>{arr.a}</A>
      <B>{arr.b}</B>
      <C>
        <Link to="/mileage/detail">{arr.c}</Link>
      </C>
      <D>{arr.d}</D>
      <E>{arr.e}</E>
    </Wrapper>
  );
};

export default React.memo(LectureRow);
