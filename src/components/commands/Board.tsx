import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduList><b>MISSION BOARD</b></EduList>
      <EduIntro>==============</EduIntro>
      <EduList>TEST BOI</EduList>
      <EduList>Test2</EduList>
    </Wrapper>
  );
};

export default Board;
