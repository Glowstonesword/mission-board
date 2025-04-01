import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Comms: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FLOCK OF IRON - FIELD TEAM ALBATROSS</p><p>=============</p></EduIntro>
      <EduIntro>No incoming communications detected.</EduIntro>
    </Wrapper>
  );
};

export default Comms;
