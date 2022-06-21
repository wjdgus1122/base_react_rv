import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Section_1 = styled.div`
  width: 100%;
  height: 90vh;
  background-color: orange;
  font-size: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const move = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: gold;
  position: absolute;
  right: 50px;
  bottom: 50px;
  animation: ${move} 0.3s infinite alternate;
`;
const Section_2 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 200px;
`;
const Con = styled.div`
  width: 500px;
  height: 700px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:hover {
    transform: translateX(-20px) translateY(-20px);
  }
  transition: 0.5s;
`;

export const Home = () => {
  return (
    <>
      <Section_1>
        메인베너
        <Box />
      </Section_1>
      <Section_2>
        <Link to="/sub_1">
          <Con
            style={{
              background: `url(https://cdn.notefolio.net/img/6d/e1/6de1505f988c6c15616b80de1ac2fab6c24e5262f4811ba2e01ce0fc4f6be451_v1.jpg) no-repeat center/cover`,
            }}
          ></Con>
        </Link>

        <Link to="/sub_2">
          <Con
            style={{
              background: `url(https://i.pinimg.com/736x/ee/57/a7/ee57a7dfe6c8cb67113850a9f04df951.jpg) no-repeat center/cover`,
            }}
          ></Con>
        </Link>
      </Section_2>
    </>
  );
};
