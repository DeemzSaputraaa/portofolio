import "./styles/App.css";
import ClickSpark from "./ClickSpark";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";

function App() {
  return (
    <>
      <Header />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <Marquee />
        <About />
      </ClickSpark>
    </>
  );
}

export default App;
