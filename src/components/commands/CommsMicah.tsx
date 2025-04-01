import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const CommsMicah: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FIELD TEAM ALBATROSS MEMBER 'JAVELIN'</p><p>=============</p></EduIntro>
      <EduIntro>No incoming communications detected.</EduIntro>
    </Wrapper>
  );
};

export default CommsMicah;
