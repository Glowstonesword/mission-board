import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b><p>=============</p></EduIntro>
      <EduIntro>CRITICAL MISSION AVAILABLE - CLOSED CHANNEL <b>[DIRECT REQUEST &gt; SSF]</b><p>Start</p></EduIntro>
      <EduIntro>Continue</EduIntro>
      <EduIntro>Finish</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro>Test4<p>Test3</p></EduIntro>
    </Wrapper>
  );
};

export default Board;
