import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>terminal</User>@<WebsiteName>flockofiron.exxor.prometheusline</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
