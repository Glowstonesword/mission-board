import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Login: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Please enter password.</EduIntro>
    </Wrapper>
  );
};

export default Login;
