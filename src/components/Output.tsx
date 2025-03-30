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
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Test from "./commands/Test";
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
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          main: <Main />,
          optional: <Optional />,
          lone: <Lone />,
          help: <Help />,
          history: <History />,
          contacts: <Contacts />,
          pwd: <GeneralOutput>/home/satnaing</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          test: <Test />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
