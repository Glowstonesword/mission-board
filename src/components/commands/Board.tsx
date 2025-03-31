import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b></EduIntro>
      <EduIntro>==============</EduIntro>
      {eduBg.map(({ title, source, desc, para1, para2, para3, para4, para5, para6, para7, para8, para9, para10, line }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="source">{source}</div>
          <div className="intro">{intro}</div>
          <div className="para1">{para1}</div>
          <div className="para2">{para2}</div>
          <div className="para3">{para3}</div>
          <div className="para4">{para4}</div>
          <div className="para5">{para5}</div>
          <div className="para6">{para6}</div>
          <div className="para7">{para7}</div>
          <div className="para8">{para8}</div>
          <div className="para9">{para9}</div>
          <div className="para10">{para10}</div>
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
    intro: "Test", "test",
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
