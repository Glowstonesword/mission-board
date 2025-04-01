import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Datalog: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>No information currently available. Please recommend topics to be researched and stored in the group chat.</EduIntro>
    </Wrapper>
  );
};

export default Datalog;
