import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
const IconWrap = styled.div`
  width: 300px;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    cursor: pointer;
  }
`;
const TextWrap = styled.div`
  width: 500px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.div`
  &:nth-child(1) {
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  &:nth-child(2) {
    font-size: 15px;
    color: white;
  }
`;

export const RouteFooter = () => {
  return (
    <>
      <Wrap>
        <IconWrap>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </IconWrap>
        <TextWrap>
          <Text>Home . Sub_1 . Sub_2</Text>
          <Text>RouteEx : SevenDay</Text>
        </TextWrap>
      </Wrap>
    </>
  );
};
