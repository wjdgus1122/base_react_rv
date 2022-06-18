import {
  faArrowDown,
  faBackward,
  faBars,
  faForward,
  faForwardFast,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;
const PhoneWrap = styled.div`
  width: 375px;
  height: 667px;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MenuIconWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const MenuCircle = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 900;
  color: white;
`;
const MusicImg = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-color: white;
`;
const MusicText = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MusicTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: white;
`;
const MusicSinger = styled.div`
  font-size: 15px;
  color: white;
`;
const GageWrap = styled.div`
  width: 100%;
`;
const GageBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: white;
`;
const Gage = styled.div`
  width: 10%;
  height: 100%;
  background-color: salmon;
`;
const Scwrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const StartSc = styled.div`
  font-size: 15px;
  color: white;
`;
const EndSc = styled.div`
  font-size: 15px;
  color: white;
`;
const MusicIconWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: white;
  }
`;
const MusicCircle = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: salmon;
  color: white;
  font-size: 25px;
`;
const FootWrap = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 50px;
`;
const NickWrap = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NickCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: salmon;
  border-radius: 50%;
`;
const NickName = styled.div`
  color: gray;
`;
const SubMenu = styled.div``;

export const IconEx = ({ msdb }) => {
  return (
    <>
      <Wrap>
        <PhoneWrap>
          <Main>
            <MenuIconWrap>
              <MenuCircle>
                <FontAwesomeIcon icon={faArrowDown} />
              </MenuCircle>
              <MenuCircle>
                <FontAwesomeIcon icon={faBars} />
              </MenuCircle>
            </MenuIconWrap>
            {msdb.map((music) => (
              <>
                <MusicImg
                  style={{
                    background: `url(${music.iconimg}) no-repeat center/cover`,
                  }}
                  key={music.id}
                />
                <MusicText>
                  <MusicTitle>{music.musicname}</MusicTitle>
                  <MusicSinger>{music.musicsinger}</MusicSinger>
                </MusicText>
                <GageWrap>
                  <GageBar>
                    <Gage />
                  </GageBar>
                  <Scwrap>
                    <StartSc>00:03</StartSc>
                    <EndSc>03:43</EndSc>
                  </Scwrap>
                </GageWrap>
                <MusicIconWrap>
                  <FontAwesomeIcon icon={faShuffle} />
                  <FontAwesomeIcon icon={faBackward} />
                  <MusicCircle>
                    <FontAwesomeIcon icon={faPause} />
                  </MusicCircle>
                  <FontAwesomeIcon icon={faForward} />
                  <FontAwesomeIcon icon={faRepeat} />
                </MusicIconWrap>
                <FootWrap>
                  <NickWrap>
                    <NickCircle
                      style={{
                        background: `url(${music.nickimg}) no-repeat center/cover`,
                      }}
                    />
                    <NickName>{music.nickname}</NickName>
                  </NickWrap>
                  <FontAwesomeIcon icon={faForwardFast} />
                </FootWrap>
              </>
            ))}
          </Main>
          <SubMenu></SubMenu>
        </PhoneWrap>
      </Wrap>
    </>
  );
};
