import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b></EduIntro>
      <EduIntro>==============</EduIntro>
      <EduList>TEST BOI</EduList>
      <EduList>Test2</EduList>
    </Wrapper>
  );
};

export default Board;
