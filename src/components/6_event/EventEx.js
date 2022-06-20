import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  font-size: 50px;
`;
const ColorBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.bgColor};
  transform: rotateZ(${(props) => props.rotate});
  transition: 1s;
`;
const Btwrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const EventEx = () => {
  const [color, setColor] = useState("salmon");
  const [chrotate, setChrotate] = useState("0deg");
  const handlered = () => {
    setColor("red");
  };
  const handleblue = () => {
    setColor("blue");
  };
  const handleyellow = () => {
    setColor("yellow");
  };
  const handlerotate = () => {
    if (chrotate == "360deg") {
      setChrotate("0deg");
    } else {
      setChrotate("360deg");
    }
  };

  return (
    <>
      <Wrap>
        버튼을 눌러보세요!
        <ColorBox bgColor={color} rotate={chrotate} />
        <Btwrap>
          <button onClick={handlered}>Red</button>
          <button onClick={handleblue}>Blue</button>
          <button onClick={handleyellow}>Yellow</button>
          <button onClick={handlerotate}>회전</button>
        </Btwrap>
      </Wrap>
    </>
  );
};
