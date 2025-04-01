import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Projects: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>PROJECTS</b><p>ONGOING GROUP DOWNTIME PROJECTS</p><p>=============</p></EduIntro>
      <EduIntro><b>SYNAPTIC CONNECTOR</b><p>GREAT MINDS THINK ALIKE</p><p>0/?</p></EduIntro>
      <EduIntro>Using components from the amalgamated mech wrecks and the <b>NULLSCAPE</b> prototype recovered from a <b>HORUS</b> cult, <b>JACK</b> and <b>KATZEN</b> aim to reinforce their teamwork through a mental connection.</EduIntro>
      <EduIntro>Grants the benefit of adjacency-based talents from a distance.</EduIntro>
      <EduList>‎ </EduList>
    </Wrapper>
  );
};

export default Projects;
