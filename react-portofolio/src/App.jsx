import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import ClickSpark from "./ClickSpark";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Marquee from "./components/Marquee";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import ChatWidget from "./components/ChatWidget";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Header />
      <ClickSpark
        sparkColor={isDarkMode ? "#fff" : "#000"}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <Marquee />
        <About />
        <Education />
        <PortfolioShowcase />
        <Contact />
      </ClickSpark>
      <Footer />
    </>
  );
}

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <ChatWidget />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
