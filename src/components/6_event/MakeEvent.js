import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

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
  padding: 40px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgray;
  svg {
    color: lightgray;
    cursor: pointer;
  }
  &:hover {
    color: black;
    border-color: black;
  }
  &:hover svg {
    color: black;
  }
`;
const Section_1 = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
`;
const ProductImg = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  background: url(https://shopping-phinf.pstatic.net/main_1232451/12324511140.20210331172844.jpg?type=f640)
    no-repeat center/cover;
  margin-bottom: 30px;
`;
const TextWrap = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 20px;
  color: #1d1d1d;
`;
const Text = styled.div`
  font-size: 20px;
  color: #1d1d1d;
`;
const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Buy = styled.div`
  width: 100px;
  height: 30px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;
const Wait = styled.div`
  width: 100px;
  height: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const PopMs_1 = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background-color: lightgray;
  display: ${(props) => props.btn};
  justify-content: center;
  align-items: center;
`;

const PopMs_2 = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  background-color: lightgray;
  display: ${(props) => props.btn_2};
  justify-content: center;
  align-items: center;
`;

export const MakeEvent = () => {
  const [chdis, setChdis] = useState("none");
  const [chpop, setChpop] = useState("none");
  const handlebuy = () => {
    setChdis("flex");
    setTimeout(() => {
      setChdis("none");
    }, 1000);
  };
  const handlewait = () => {
    setChpop("flex");
    setTimeout(() => {
      setChpop("none");
    }, 1000);
  };
  return (
    <>
      <Wrap>
        <Phone>
          <Header>
            <Circle>
              <FontAwesomeIcon icon={faArrowDown} />
            </Circle>
            <Circle>
              <FontAwesomeIcon icon={faBars} />
            </Circle>
          </Header>
          <ProductImg />
          <TextWrap>
            <Title>제품</Title>
            <Text>
              [당일발송/본사직영] 비프렌드 G2 마우스 3360센서 정확한 유선마우스
              사무용 게이밍
            </Text>
          </TextWrap>
          <BtnWrap>
            <Buy onClick={handlebuy}>구매</Buy>
            <Wait onClick={handlewait}>장바구니</Wait>
          </BtnWrap>
          <PopMs_1 btn={chdis}>구매되셨습니다!</PopMs_1>
          <PopMs_2 btn_2={chpop}>장바구니에 담아졌습니다!</PopMs_2>
        </Phone>
      </Wrap>
    </>
  );
};
