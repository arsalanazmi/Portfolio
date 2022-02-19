import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "./SocialIcons";
import PowerButton from "../subComponent/PowerButton";
import ParticleComponent from "../subComponent/ParticleComponent";
import BigTitle from "../subComponent/BigTitle";

import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0%{transform:translateY(-10px)}
50% { transform: translateY(15px translateX(15px)}
100%{transform:translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  z-index: 30;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5em + 5vw);
  top: 11.6rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 600px) {
    position: absolute;
    left: calc(4em + 5vw);
    top: 8rem;
    height: 55vh;
  }
  @media (max-width: 400px) {
    position: absolute;
    // left: calc(3em + 5vw);
    top: 7rem;
    height: 60vh;
  }
`;

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  },
  exit: { opacity: 0, transition: { duration: 1 } }
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box>
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />
          <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman>
          <Main>
            I'm a full stack developer located in Pakistan. I love to create
            simple yet beautiful websites as well as softwares with great user
            experience.
            <br />
            <br />
            I'm interested in full stack and the whole frontend like trying new
            things and building great projects.
            <br />
            <br />
            I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links.
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default AboutPage;
