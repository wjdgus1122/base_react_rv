import styled from "styled-components";
import { productdata } from "../../db";
import { BtnWrap } from "./components/BtnWrap";
import { HeaderWrap } from "./components/HeaderWrap";
import { MiddleWrap } from "./components/MiddleWrap";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Phone = styled.div`
  width: 375px;
  height: 660px;
  border-radius: 25px;
  border: 5px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 40px; */
  position: relative;
`;

export const MakeEvent = () => {
  return (
    <>
      <Wrap>
        <Phone>
          <HeaderWrap />

          <MiddleWrap data={productdata} />
          <BtnWrap />
        </Phone>
      </Wrap>
    </>
  );
};
