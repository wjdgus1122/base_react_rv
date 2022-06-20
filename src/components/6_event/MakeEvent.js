import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${(props) => props.bgcolor};
  transform: translateX(${(props) => props.transX})
    translateY(${(props) => props.transY}) rotateZ(${(props) => props.rotate});
  transition: 1s;
`;

export const MakeEvent = () => {
  const [color, setColor] = useState("salmon");
  const [transX, setTransX] = useState("0px");
  const [transY, setTransY] = useState("0px");
  const [rotate, setRotate] = useState("0deg");

  const handlebox = () => {
    setColor("gold");
    setTransX("500px");
    setTransY("500px");
    setRotate("360deg");
  };
  const handlenew = () => {
    setColor("salmon");
    setTransX("0px");
    setTransY("0px");
    setRotate("0deg");
  };
  return (
    <>
      <button onClick={handlebox}>얄로오</button>
      <button onClick={handlenew}>복구!</button>
      <Box bgcolor={color} transX={transX} transY={transY} rotate={rotate} />
    </>
  );
};
