import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const CommsOdin: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FIELD TEAM ALBATROSS - CALLSIGN 'CORVUS'</p><p>=============</p></EduIntro>
      <EduIntro><p>INCOMING COMMUNICATIONS <b>[SENDER: ERROR]</b><p>Date: From the Unclipped Wings Bar Party</p></p></EduIntro>
      <EduIntro>You two idiots beat each other up thinking each of the other person was me when I stepped out the ring. It was quite funny, though you broke a table. Don't worry, I already got the money out of your accounts. Your insults suck, work on your game. -Xi.</EduIntro>
      <EduIntro>MESSAGE ENDS.</EduIntro>
      <EduList>‎ </EduList>
    </Wrapper>
  );
};

export default CommsOdin;
