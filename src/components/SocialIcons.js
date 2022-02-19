import { Github, Facebook } from "./AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  dispaly: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled(motion.h1)`
  width: 2px;
  height: 8rem;
  position: relative;
  left: 0.7rem;
  background-color: ${props =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = props => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer" 
          href="https://www.facebook.com/arsalan.azmi.9"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer" 
          href="https://github.com/arsalanazmi"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        color={props.theme}
      />
    </Icons>
  );
};

export default SocialIcons;