import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
// import { useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import { AnimatePresence } from "framer-motion";
// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponent/SoundBar";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        {/* For framer motion animation on page change */}
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/work" element={<WorkPage />} />
              <Route exact path="/skills" element={<MySkillsPage />} />
            </Routes>
          </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
