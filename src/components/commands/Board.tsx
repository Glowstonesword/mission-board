import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b></EduIntro>
      <EduIntro>==============</EduIntro>
      {eduBg.map(({ title, source, desc, line }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="source">{source}</div>
          <div className="desc">{desc}</div>
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
    desc: Test,
    line: " ",
  },
  {
    title: "Something Or Other",
    source: "MISSION AVAILABLE - OPEN CHANNEL [OPEN CONTRACTS > IPS-N]",
    desc: "Test",
    line: " ",
  },
  {
    title: "Who Watches The Watchers",
    source: "MISSION AVAILABLE - CLOSED CHANNEL [CLOSED CONTRACT > SSF]",
    desc: "Flock of Iron. This is Lieutenant Bridges."
    line: " ",
  },
];

export default Board;
