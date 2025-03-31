import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b><p>=============</p></EduIntro>
      <EduIntro>TEST BOI<p>yeet</p></EduIntro>
      <EduList>Test2</EduList>
      <EduList>‎ </EduList>
      <EduList><p>Test4</p><p>Test3</p></EduList>
    </Wrapper>
  );
};

export default Board;
