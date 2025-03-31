import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Main from "./commands/Main";
import Optional from "./commands/Optional";
import GeneralOutput from "./commands/GeneralOutput";
import Lone from "./commands/Lone";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Contacts from "./commands/Contacts";
import Projects from "./commands/Projects";
import Themes from "./commands/Themes";
import Datalog from "./commands/Datalog";
import Organisation from "./commands/Organisation";
import Login from "./commands/Login";
import WelcomeOdin from "./commands/WelcomeOdin";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          main: <Main />,
          optional: <Optional />,
          lone: <Lone />,
          contacts: <Contacts />,
          projects: <Projects />,
          clear: <Clear />,
          themes: <Themes />,
          welcome: <Welcome />,
          help: <Help />,
          about: <About />,
          echo: <Echo />,
          organisation: <Organisation />,
          pwd: <GeneralOutput>/home/satnaing</GeneralOutput>,
          datalog: <Datalog />,
          history: <History />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
          login: <Login />,
          "4thebirdz": <WelcomeOdin />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
