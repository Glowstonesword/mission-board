import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b></EduIntro>
      <EduIntro>==============</EduIntro>
      <EduList>TEST BOI</EduList>
      {eduBg.map(({ title, source, intro, line }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="source">{source}</div>
          <div className="intro">{intro}</div>
          <div className="line">{line}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "What Goes Around",
    source: "MISSION AVAILABLE - DIRECTLY FORWARDED [OPEN CONTRACTS > IPS-N]",
    intro: "Test",
    line: " ",
  },
  {
    title: "Something Or Other",
    source: "MISSION AVAILABLE - OPEN CHANNEL [OPEN CONTRACTS > IPS-N]",
    intro: "Test  test2",
    line: " ",
  },
  {
    title: "Who Watches The Watchers",
    source: "MISSION AVAILABLE - CLOSED CHANNEL [CLOSED CONTRACT > SSF]",
    intro: "Flock of Iron. This is Lieutenant Bridges.",
    line: " ",
  },
];

export default Board;
