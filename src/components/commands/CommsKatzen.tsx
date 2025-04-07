import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const CommsKatzen: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FIELD TEAM ALBATROSS - CALLSIGN 'MITTENS'</p><p>=============</p></EduIntro>
      <EduIntro><p>INCOMING COMMUNICATIONS <b>[SENDER: WHISPER]</b><p>Date: From the Unclipped Wings Bar Party</p></p></EduIntro>
      <EduIntro>fluffy. floof. very floof. you gud person. gib cuddle. not drunk. no. floof.</EduIntro>
      <EduIntro>MESSAGE ENDS.</EduIntro>
      <EduList>‎ </EduList>
    </Wrapper>
  );
};

export default CommsKatzen;
