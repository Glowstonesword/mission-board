import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const CommsKatzen: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FIELD TEAM ALBATROSS - CALLSIGN 'MITTENS'</p><p>=============</p></EduIntro>
      <EduIntro>No incoming communications detected.</EduIntro>
    </Wrapper>
  );
};

export default CommsKatzen;
