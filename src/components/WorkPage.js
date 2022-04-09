import { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponent/LogoComponent";
import SocialIcons from "./SocialIcons";
import { YinYang } from "./AllSvgs";
import PowerButton from "../subComponent/PowerButton";

import { Work } from "../data/WorkData";
import Card from "./Card";
import BigTitle from "../subComponent/BigTitle";

const Box = styled.div`
  background-color: ${props => props.theme.body};
  height: 115s0vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 10.5rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index: 20;
  color: white;
  @media (max-width: 600px) {
    top: 9.5rem;
    height: 55vh;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  height: 80px;
  z-index: 1;
`;

// Framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
};
const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = "translateX(-" + window.pageYOffset + "px)";
      yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 500
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {type:'spring',mass:0.4,damping:8, when:'beforeChildren',staggerChildren:1.4 }
    },
    exit: { opacity: 0, x: -500, transition: { ease:'easeInOut',duration: 1 } }
  };

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

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map(d => <Card key={d.id} data={d} />)}
          </Main>

          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>

          <BigTitle text="WORK" top="10%" right="20%" />
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default WorkPage;
