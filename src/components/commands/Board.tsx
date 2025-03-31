import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b><p>=============</p></EduIntro>
      <EduIntro><b>What Goes Around</b><p>MISSION AVAILALE - CLOSED CHANNEL <b>[DIRECT REQUEST &gt; SSC]</b></p></EduIntro>
      <EduIntro>Ordoesthislookbetterretgsetrghsthsrdhdrhtdrhdrtyhdytrh</EduIntro>
      <EduIntro>Continue</EduIntro>
      <EduIntro>Finish</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro><b>Who Investigates The Investigators</b><p>MISSION AVAILALE - CLOSED CHANNEL <b>[DIRECT REQUEST &gt; SSF]</b></p><p>Start garefgasergsrehgsrhtshshtsdrhshsrhtsrhsrhsrhs</p></EduIntro>
      <EduIntro>Continue</EduIntro>
      <EduIntro>Finish</EduIntro>
    </Wrapper>
  );
};

export default Board;
