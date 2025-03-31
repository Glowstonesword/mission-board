import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Board: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro><b>MISSION BOARD</b></EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "What Goes Around",
    desc: "MISSION AVAILABLE - DIRECTLY FORWARDED [OPEN CONTRACTS > IPS-N]",
  },
  {
    title: "Something Or Other",
    desc: "MISSION AVAILABLE - OPEN CHANNEL [OPEN CONTRACTS > IPS-N]",
  },
  {
    title: "Who Watches The Watchers",
    desc: "MISSION AVAILABLE - CLOSED CHANNEL [CLOSED CONTRACT > SSF]",
  },
];

export default Board;
