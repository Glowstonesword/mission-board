import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>lancer</User>@<WebsiteName>terminal.missionboard.flockofiron</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
