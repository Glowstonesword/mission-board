import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Organisation: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <b>FLOCK OF IRON</b><p>FORMATION PROGRESS 4/5</p><p>=============</p>
      <EduIntro><b>BASES</b><p>=============</p></EduIntro>
      <EduIntro>BUNKER<p>A fallback bunker located relatively close to the <b>GIBRALTAR COMPLEX</b>, initially discovered by <b>KIRCHE</b> and built up by <b>MICAH</b> to have various facilities needed for Lancers. Also contains specialised storage facilities for <b>SPACE DRUGS</b>.</p>.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro>SSF QUARTERS<p>A dedicated quarters in the <b>GIBRALTAR COMPLEX</b> for <b>FIELD TEAM ALBATROSS</b>, now upgraded with a consulate room for the <b>FLOCK OF IRON</b> mercenary company.</p>.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro>UNDERWATER BASE<p>Granted to the <b>FLOCK OF IRON</b> upon resolving the <b>HELIOS INCIDENT</b>, this facility acts as one of the main bases for the <b>FLOCK OF IRON</b>, though its location is known by the <b>SSF</b> and <b>UNION</b>.</p>.</EduIntro>
      <EduList>‎ </EduList>
      <EduList>‎ </EduList>
      <EduList>‎ </EduList>
      <EduIntro><b>MANPOWER</b><p>=============</p></EduIntro>
      <EduIntro>UNCLIPPED WINGS<p>A rebel group with former and ongoing involvement with <b>ODIN</b>, the local <b>SCRAPHEAP</b> group immediately signed up after hearing of the <b>FLOCK OF IRON</b>'s formation.</p>.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro>THE LOCALS<p>Your deeds have gathered up enough recognition that various locals, both from the <b>GIBRALTAR COMPLEX</b> and other settlements have come to join in a variety of positions, though no notable combat figures amongst their number compared to your group.</p>.</EduIntro>
      <EduList>‎ </EduList>
      <EduIntro>FORMER FRIENDS<p>Several familiar faces from the slums of the <b>GIBRALTAR COMPLEX</b> have shown up to join - notably, <b>DODGER</b> and <b>TROUBLE</b> of <b>ALBUS</b>'s homeless community after your grand impression laid on them before.</p>.</EduIntro>
    </Wrapper>
  );
};

export default Organisation;
