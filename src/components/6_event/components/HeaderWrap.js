import { faArrowDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
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

export const HeaderWrap = () => {
  return (
    <Header>
      <Circle>
        <FontAwesomeIcon icon={faArrowDown} />
      </Circle>
      <Circle>
        <FontAwesomeIcon icon={faBars} />
      </Circle>
    </Header>
  );
};
