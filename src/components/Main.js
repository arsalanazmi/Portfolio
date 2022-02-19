import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import PowerButton from "../subComponent/PowerButton";
import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "./SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${props => props.theme.body} !important;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 900 !important;
  }
  // @media (max-width: 600px) {
  //   .icons{
  //     color: ${props => (props.click ? "red" : "yellow")}; !important

  //   }
  // }
`;

const Container = styled.div`
  padding: 2rem;
  // @media (max-width: 600px) {
  //   .icons{
  //     color: ${props => (props.click ? "red" : "yellow")}; !important

  //   }
  // }
`;

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: 2rem;
  text-decoration: none;
  z-index: 1;
  @media (max-width: 600px) {
    color: ${props => (props.click ? props.theme.body : props.theme.text)};
  }
`;
const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 600px) {
    text-shadow: ${props =>
      props.click ? "1px 1px 3px black" : "none"} !important;
    color: ${props => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 600px) {
    color: ${props => props.theme.text};
  }
`;

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform:rotate(0);
}
to{
transform:rotate(360deg);`;

const Center = styled.div`
  position: absolute;
  top: ${props => (props.click ? "85%" : "50%")};
  left: ${props => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  transition: 1s ease;

  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${props => (props.click ? "none" : "inline-block")} !important;
    padding-top: 1rem;
  }

  @media (max-width: 600px) {
    .yinyang {
      width: ${props => (props.click ? "40px" : "100px")} !important;
      height: ${props => (props.click ? "40px" : "100px")} !important;
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => (props.click ? "50%" : "0%")};
  height: ${props => (props.click ? "100%" : "0%")};
  height: 100%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 600px) {
    position: absolute;
    right: 0;
    z-index: 1;
    width: ${props => (props.click ? "100%" : "0%")};
    height: ${props => (props.click ? "50%" : "0%")};
  }
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} className="icons" />
        <DarkDiv click={click} />
        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 100 : 200}
            height={click ? 100 : 200}
            fill="crrentColor"
            className="yinyang"
          />
          <span style={{ textAlign: "center" }}>Click here</span>
        </Center>

        <Contact
          click={click}
          target="_blank"
          href="mailto:arsalan.azmi92@gmail.com"
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>

        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;