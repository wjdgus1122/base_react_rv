import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Con = styled.div`
  width: 500px;
  height: 700px;
`;
const TextWrap = styled.div`
  width: 700px;
  margin-left: 70px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: gray;
  margin-bottom: 30px;
`;
const Text = styled.div`
  font-size: 20px;
  color: gray;
`;

export const Sub_2 = () => {
  return (
    <>
      <Wrap>
        <Con
          style={{
            background: `url(https://i.pinimg.com/736x/ee/57/a7/ee57a7dfe6c8cb67113850a9f04df951.jpg) no-repeat center/cover`,
          }}
        />
        <TextWrap>
          <Title>서브페이지2</Title>
          <Text>
            딸이 있다고 고백해 화제를 모은 중국 가수 장비천이 대리출산 의혹에
            휩싸였다. 20일 중국, 대만 등 중화권 매체들은 지난해 1월 딸이 있는
            미혼모임을 밝힌 장비천이 대리출산을 했다는 네티즌의 주장이 나왔다고
            보도했다. 해당 네티즌은 장비천이 2019년 2월 딸을 낳았음에도 출산
            3개월 전인 2018년 11월 공식 행사에 참석할 당시 배가 나오지 않은
            상태였다며 대리출산을 주장했다. 이 네티즌은 장비천의 공식 석상
            사진을 증거로 제시했다. 2018년 10월과 11월 사진에서 장비천은 배가
            홀쭉한 상태다.
          </Text>
        </TextWrap>
      </Wrap>
    </>
  );
};
