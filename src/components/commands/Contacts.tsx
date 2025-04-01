import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Contacts: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>SSF</b><p>SCRAPHEAP SECURITY FORCE</p></p><p>=============</p></EduIntro>
      <EduIntro><b>CPT. FERRA AUTUMN</b><p>OH CAPTAIN MY CAPTAIN</p></EduIntro>
      <EduIntro><b>CAPTAIN FERRA AUTUMN</b> is the captain of the local forces of the <b>SCRAPYARD SECURITY FORCE</b>.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro><b>LT. RHYS BRIDGES</b><p>OL' RELIABLE</p></EduIntro>
      <EduIntro>A lieutenant serving under <b>CPT. FERRA AUTUMN</b>. Frequent contact and handler for the <b>FLOCK OF IRON</b> in their contracts with the <b>SSF</b></EduIntro>
      <EduList>‎ </EduList>
      <EduIntro><b>TCH. WINNA ROUGE</b><p>IMPROVISED ENGINEERING</p></EduIntro>
      <EduIntro>Working to keep things running smoothly at the <b>GIBRALTAR COMPLEX</b>, <b>TECHNICIAN WINNA ROUGE</b> is the port of call to the <b>FLOCK OF IRON</b> for their material needs from the <b>SSF</b></EduIntro>
      <EduList>‎ </EduList>
      <EduList>‎ </EduList>
      <EduIntro><b>UNCLIPPED WINGS</b><p>RISING RAGTAG REVOLUTIONARIES</p><p>=============</p></EduIntro>
    </Wrapper>
  );
};

export default Contacts;
