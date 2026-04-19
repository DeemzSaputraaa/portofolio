import { Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./styles/App.css";
import ClickSpark from "./ClickSpark";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Marquee from "./components/Marquee";
import PortfolioShowcase from "./components/PortfolioShowcase";
import GithubActivity from "./components/GithubActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import ChatWidget from "./components/ChatWidget";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Helmet>
        <title>Dimas Edwin Saputra - Portfolio</title>
        <meta name="description" content="Portfolio dari Dimas Edwin Saputra. Spesialis Frontend, Backend, AI/ML, dan Administrasi Database." />
      </Helmet>
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
        <GithubActivity />
        <Contact />
      </ClickSpark>
      <Footer />
    </>
  );
}

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
          <ChatWidget />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
