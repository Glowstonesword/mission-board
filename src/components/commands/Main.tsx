import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Main: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Main Mission Board</EduIntro>
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
    title: "Example",
    desc: "Example Desc",
  },
  {
    title: "Example 2",
    desc: "etc",
  },
];

export default Main;
