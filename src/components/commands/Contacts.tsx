import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Contacts: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>SSF</b><p>=============</p></EduIntro>
      <EduIntro><b>CPT. FERRA AUTUMN</b><p>SSF CAPTAIN</p></EduIntro>
      <EduIntro>Captain Ferra Autumn is the captain of the local forces of the Scrapyard Security Force.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro><b>LT. RHYS BRIDGES</b><p>SSF LIEUTENANT</p></EduIntro>
      <EduIntro>A lieutenant serving under <b>CPT. FERRA AUTUMN</b>. Frequent contact and handler for the <b>FLOCK OF IRON</b> in their contracts with the <b>SSF</b></EduIntro>
      <EduList>‎ </EduList>
    </Wrapper>
  );
};

export default Contacts;
