import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Projects: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Ongoing projects will be here.</EduIntro>
    </Wrapper>
  );
};

export default Projects;
