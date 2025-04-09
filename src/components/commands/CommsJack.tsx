import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const CommsJack: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>COMMUNICATIONS</b><p>FIELD TEAM ALBATROSS - CALLSIGN 'MITTENS'</p><p>=============</p></EduIntro>
      <EduIntro><p>INCOMING COMMUNICATIONS <b>[SENDER: MITTENS]</b><p>Date: From the Unclipped Wings Bar Party</p></p></EduIntro>
      <EduIntro>meow meow meow. meow meow. meow meow meow. meow. meow meow meow. meeeoooooow. ;) meow.</EduIntro>
      <EduIntro>MESSAGE ENDS.</EduIntro>
      <EduList>‎ </EduList>
    </Wrapper>
  );
};

export default CommsJack;
