import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "./SocialIcons";
import PowerButton from "../subComponent/PowerButton";
import ParticleComponent from "../subComponent/ParticleComponent";
import BigTitle from "../subComponent/BigTitle";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex !important;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  @media (max-width: 399px) {
    height: 225vh !important;
  }
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  margin: 1rem;
  width: 23vw;
  height: 40vh;
  z-index: 100 !important;
  line-height: 1.5;
  cursor: pointer;
  position: relative;
  left: 1rem;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media (max-width: 967px) {
    position: relative !important;
    top: 80px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    width: 25vw;
    height: 35vh;
  }
  @media (max-width: 399px) {
    width: 45vw;
    height: 35vh;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 400
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  },
  exit: { opacity: 0, y: -400, transition: { duration: 1 } }
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box>
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent theme="light" />
          <Main>
            <Title>Frontend Developer</Title>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>UI/Styling</Title>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Material-Ui</li>
                <li>Materialize CSS</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>Backend Developer</Title>
            <Description>
              <strong>Skills</strong>

              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="SKILLS" top="78.5%" right="10%" />
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default MySkillsPage;
