import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  position: fixed;
  z-index: 10;
  svg {
    font-size: 20px;
    cursor: pointer;
    color: ${(props) => props.color};
  }
`;
const MenuWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: ${(props) => props.on};
  transition: 1s;
`;
const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: 900;
  color: ${(props) => props.color};
  text-decoration: none;
`;
const StyledLink_2 = styled(Link)`
  font-size: 30px;
  font-weight: 900;
  color: black;
  text-decoration: none;
  &:nth-child(2) {
    margin-top: 100px;
  }
`;

export const RouteHeader = () => {
  const [menu, setMenu] = useState("-100%");
  const [chcolor, setChcolor] = useState("black");
  const handlebtn = () => {
    if (menu == "-100%") {
      setMenu("0");
    } else {
      setMenu("-100%");
    }
    if (chcolor == "black") {
      setChcolor("lightgray");
    } else {
      setChcolor("black");
    }
  };
  return (
    <Wrap>
      <HeaderWrap>
        <StyledLink to="/" color={chcolor}>
          로고
        </StyledLink>
        <FontAwesomeIcon icon={faBars} onClick={handlebtn} color={chcolor} />
      </HeaderWrap>
      <MenuWrap on={menu}>
        <StyledLink_2 to="/sub_1">메뉴1</StyledLink_2>
        <StyledLink_2 to="/sub_2">메뉴2</StyledLink_2>
      </MenuWrap>
    </Wrap>
  );
};
