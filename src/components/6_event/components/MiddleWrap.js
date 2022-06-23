import styled from "styled-components";

const PWrap = styled.div`
  width: 375px;
  height: 400px;
  overflow: hidden;
  position: relative;
`;
const Conwrap = styled.div`
  width: 1125px;
  height: 400px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;
const Con = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ProductImg = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
const TextWrap = styled.div`
  padding: 0 20px;
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
const LeftBtn = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: lightgray;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const RightBtn = styled.div`
  font-size: 25px;
  font-weight: 900;
  color: lightgray;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const MiddleWrap = ({ data }) => {
  const handleleft = () => {
    var i = 0;
    const wrap = document.querySelector(".ProductWrap");
    if (i > 2) {
      i = 0;
    }
    console.log(wrap);
    i++;
    wrap.style.left = -375 * i + "px";
  };
  const handleright = () => {
    var i = 0;
    const wrap = document.querySelector(".ProductWrap");
    if (i < 0) {
      i = 2;
    }
    console.log(wrap);
    i--;
    wrap.style.left = -375 * i + "px";
  };
  return (
    <>
      <PWrap>
        <LeftBtn onClick={handleleft}> 〈 </LeftBtn>
        <RightBtn onClick={handleright}> 〉 </RightBtn>
        <Conwrap classname="ProductWrap">
          {data.map((pdb) => (
            <Con>
              <ProductImg style={{ background: `${pdb.img}` }} />
              <TextWrap>
                <Title>{pdb.title}</Title>
                <Text>{pdb.text}</Text>
              </TextWrap>
            </Con>
          ))}
        </Conwrap>
      </PWrap>
    </>
  );
};
