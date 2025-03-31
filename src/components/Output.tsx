import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import History from "./commands/History";
import Contacts from "./commands/Contacts";
import Projects from "./commands/Projects";
import Themes from "./commands/Themes";
import Datalog from "./commands/Datalog";
import Organisation from "./commands/Organisation";
import Login from "./commands/Login";
import WelcomeOdin from "./commands/WelcomeOdin";
import Comms from "./commands/Comms";
import CommsOdin from "./commands/CommsOdin";
import Board from "./commands/Board";
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
          contacts: <Contacts />,
          board: <Board />,
          projects: <Projects />,
          clear: <Clear />,
          themes: <Themes />,
          help: <Help />,
          echo: <Echo />,
          organisation: <Organisation />,
          pwd: <GeneralOutput>/home/fieldteamalbatross/flockofiron</GeneralOutput>,
          datalog: <Datalog />,
          history: <History />,
          login: <Login />,
          "4thebirdz": <WelcomeOdin />,
          "comms4thebirdz": <CommsOdin />,
          comms: <Comms />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
