import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Contacts: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>SCRAPHEAP SECURITY FORCE</b><p>OVERWORKED PEACEKEEPERS</p><p>=============</p></EduIntro>
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
      <EduList>‎ </EduList>
      <EduIntro><b>UNCLIPPED WINGS</b><p>RISING RAGTAG REVOLUTIONARIES</p><p>=============</p></EduIntro>
      <EduIntro><b>JASPER BLACKTHORNE</b><p>ABSOLUTE UNIT</p></EduIntro>
      <EduIntro>Heading the local division of the <b>UNCLIPPED WINGS</b>, and old friend of <b>CORVUS</b>, <b>JASPER</b> pilots a minigun-wielding <b>GOLIATH</b> in his efforts to bring an end to the corporation's grip on the galaxy.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro><b>GWEN CATLOW</b><p>ABSOLUTE UNIT</p></EduIntro>
      <EduIntro>Second-in-command and quartermaster of the local division of the <b>UNCLIPPED WINGS</b>, <b>GWEN</b> is a young strategic prodigy backing up and being trained by <b>JASPER BLACKTHORNE</b> in their fight.</EduIntro>
      <EduList>‎ </EduList>
      <EduList>‎ </EduList>
      <EduList>‎ </EduList>
      <EduIntro><b>HORUS</b><p>AT LEAST THIS ISN'T 40K</p><p>=============</p></EduIntro>
    </Wrapper>
  );
};

export default Contacts;
