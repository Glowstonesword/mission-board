import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>lancer</User>@<WebsiteName>terminal.flockofiron.scrapheap</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
