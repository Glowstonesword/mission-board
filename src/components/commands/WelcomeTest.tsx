import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const WelcomeTest: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`███████╗██╗      ██████╗  ██████╗██╗  ██╗     ██████╗ ███████╗    ██╗██████╗  ██████╗ ███╗   ██╗    
██╔════╝██║     ██╔═══██╗██╔════╝██║ ██╔╝    ██╔═══██╗██╔════╝    ██║██╔══██╗██╔═══██╗████╗  ██║    
█████╗  ██║     ██║   ██║██║     █████╔╝     ██║   ██║█████╗      ██║██████╔╝██║   ██║██╔██╗ ██║    
██╔══╝  ██║     ██║   ██║██║     ██╔═██╗     ██║   ██║██╔══╝      ██║██╔══██╗██║   ██║██║╚██╗██║    
██║     ███████╗╚██████╔╝╚██████╗██║  ██╗    ╚██████╔╝██║         ██║██║  ██║╚██████╔╝██║ ╚████║    
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝     ╚═════╝ ╚═╝         ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`███████╗██╗      ██████╗  ██████╗██╗  ██╗     ██████╗ ███████╗    ██╗██████╗  ██████╗ ███╗   ██╗    
██╔════╝██║     ██╔═══██╗██╔════╝██║ ██╔╝    ██╔═══██╗██╔════╝    ██║██╔══██╗██╔═══██╗████╗  ██║    
█████╗  ██║     ██║   ██║██║     █████╔╝     ██║   ██║█████╗      ██║██████╔╝██║   ██║██╔██╗ ██║    
██╔══╝  ██║     ██║   ██║██║     ██╔═██╗     ██║   ██║██╔══╝      ██║██╔══██╗██║   ██║██║╚██╗██║    
██║     ███████╗╚██████╔╝╚██████╗██║  ██╗    ╚██████╔╝██║         ██║██║  ██║╚██████╔╝██║ ╚████║    
╚═╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝     ╚═════╝ ╚═╝         ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    
`}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome, <b>CALLSIGN WILL BE HERE WHEN YOU LOGIN WITH YOUR PROPER PASS</b>.</div>
        <Seperator>----</Seperator>
        <div>
          The main database can be found{" "}
          <Link href="https://sprightly-puffpuff-4caef5.netlify.app/">
            here
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`⠀⡀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⢠⣠⣴⣶⡷⠀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⣠⠀⠠⠀⠠
⠀⠄⠀⠄⠀⠄⠀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⠄⢀⠠⠀⡀⣴⣾⣿⣿⣿⠟⠁⠀⠂⠠⠀⠠⠀⠠⠀⡀⠄⢀⠠⠀⣠⣴⣿⡏⢠⠐⠀⠂
⠁⠀⠂⠐⠀⠂⠐⠀⠄⠀⠄⠀⠄⠀⠄⠀⠄⠀⠄⠀⢤⣾⣿⣿⣿⡿⠃⠠⠈⢀⠁⠄⠂⠐⠈⠀⠄⠀⠄⣠⣴⣾⣿⣿⠟⣠⡟⠀⡀⠁
⢁⠈⢀⠁⡀⠁⠄⠁⡀⠂⡀⢁⠀⠂⡀⢁⠀⠂⡀⣱⣿⣿⣿⣿⡿⠁⢀⠐⠀⢄⣠⣤⣦⣴⣵⣴⣾⣾⣿⣿⣿⣿⣟⣯⣾⡟⢀⣶⠇⠀
⠀⠠⠀⠄⠀⠂⠐⢀⠠⠀⠄⠀⠄⠁⢀⠠⠀⠁⣰⣿⣿⣿⣿⣿⠃⠀⠄⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣫⣶⣿⠟⠀⠈
⡁⠐⠀⠄⠁⡀⢁⠀⠠⠀⠂⠐⢀⠈⢀⠀⠄⣱⣿⣿⣿⣿⣿⣿⠀⣢⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢋⡄⢈⠀
⠠⠀⢁⠀⠂⠀⠄⠐⠀⠂⠈⡀⠄⠠⢀⣤⣶⣿⣿⣿⣿⣿⡿⢫⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣛⣯⣵⡾⠋⠀⡀⠄
⠄⠂⢀⠐⠈⢀⠐⠀⢁⠀⡁⠀⣤⣾⣿⣿⣿⣿⣿⣿⠿⣋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⡿⠿⠛⠁⠠⠀⠂⢀⠀
⠄⠂⠀⠄⠂⠀⠄⠈⡀⠀⢄⣾⣿⣿⣿⠿⣛⣭⣥⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣛⡻⠻⠛⠓⠂⠀⠄⠁⡀⠂⠈⢀⠀
⠐⠀⢁⠠⠀⢁⠀⠂⡀⠐⣼⣿⣿⡟⣱⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢀⠈⡀⢀⠀⠄⢈⠀⡈⠠⠐⠀⡀⠂⠁⡀⠄
⠄⠁⡀⠠⠐⠀⡀⠁⡀⠄⣿⣿⡟⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠟⠟⠀⢈⠀⠀⠄⠀⠄⠂⠀⠄⠀⠄⠐⠀⠠⠐⠀⠠⠀
⠐⠀⠠⠀⠐⢀⠠⠀⢄⣠⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⠄⠈⢀⠀⢁⠀⠂⡀⠂⠁⠀⠂⠐⠈⠀⠂⠠⠈⢀⠐
⠄⠈⡀⢈⠠⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠛⠃⠀⠂⡀⢁⠠⠀⠄⢀⠁⢀⠐⠈⠀⡁⢀⠁⠄⠁⡀⠂⠀⠄
⠄⠂⠀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣙⡛⡀⡀⠁⠄⠠⡀⣠⣀⣂⣀⣄⣄⠄⠂⠁⢀⠠⠀⠐⢀⠠⠀⢁⠀
⠐⠀⣡⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠋⡁⠀⠄⠂⠀⠄⢀⠁⡀⠠⠐⠀⠠
⡀⠂⡿⢋⡽⠟⠋⠁⠀⡀⠐⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠋⢉⠀⠄⠈⡀⠄⠐⠀⠄⠁⠠⠀⠠⠀⠄⠐⠈⠀
⠠⠀⠉⠀⡀⠀⠄⠂⠁⢀⠐⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠉⠉⢀⠁⠠⠀⠄⠂⠀⠄⠂⠁⠀⠠⠐⠀⠂⠈⡀⠈⡀⠄⠂⠐⠈⢀
⠀⠄⠁⠄⠀⠂⡀⠂⠈⠀⢠⣿⣿⣿⣿⣿⣿⣟⣉⢹⣿⠉⢀⠠⠈⠀⠄⠐⠀⠂⠀⠂⠁⡀⠐⠀⢁⠀⠂⡀⠁⠄⠀⠂⢀⠠⠐⠀⡈⠀
⢁⠀⠂⡀⠁⠄⠠⠀⢁⢨⣾⣿⣿⣿⣿⠋⡟⠉⢙⣾⣧⣦⣄⡀⠄⠁⡀⠂⠁⡀⠁⠄⠁⠀⠄⠁⡀⠐⢀⠀⠂⡀⢁⠐⠀⡀⠄⠂⠀⠄
⢀⠐⢀⣶⣶⣔⠀⣈⣴⣿⣿⣿⡿⠉⠁⡀⠄⠂⣾⠏⠀⠈⣻⠃⠀⠄⠠⠐⠀⡀⠂⠐⠈⢀⠐⠀⠄⠂⠀⠄⠁⢀⠀⠄⠂⠀⠠⠐⠀⠂
⠀⠄⠘⣾⠟⠹⢿⣿⣏⠁⠀⡀⠀⠄⠁⢀⠀⠄⢈⠑⠊⡀⢁⠀⡁⠠⠐⠀⠄⠠⠐⠈⢀⠠⠀⠂⠀⠂⠁⠠⠈⠀⠠⠀⠂⠁⠠⠐⠀⢁
⢀⠐⠀⡈⠓⠀⡀⠀⣿⠃⠠⠀⠂⠐⠈⠀⡀⠐⠀⡀⠂⠀⠄⠀⠄⠠⠐⠀⠐⠀⠄⠂⢀⠠⠐⠈⠀⢁⠐⠀⠂⠁⡀⠂⡀⠁⠄⠐⠈⠀
⠄⠀⠂⢀⠐⠀⠠⠈⠠⠐⠀⠂⠈⡀⠂⠁⠀⠄⠁⠀⠄⠁⡀⠂⠐⠀⠐⠈⠀⢁⠠⠐⠀⠀⠄⢀⠁⡀⠄⠂⠁⡀⠄⠠⠀⠂⠐⢀⠈⡀`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default WelcomeTest;
