import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Numbers } from "./components/Numbers";
import { AboutUs } from "./components/AboutUs";
import { Events } from "./components/Events";
import { Renaissance } from "./components/Renaissance";
import LinesOfApp from "./components/AppreciationSection/LinesOfApp";
import { Footer } from "./components/Footer";
import AutoPlay from "./components/AutoPlay";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <HeroSection></HeroSection>

      <Numbers></Numbers>

      <AboutUs></AboutUs>

      <Events></Events>

      {/* <Renaissance></Renaissance> */}

      {/* <StartUps></StartUps> */}
      <AutoPlay></AutoPlay>

      <LinesOfApp></LinesOfApp>

      <Footer></Footer>
    </>
  );
}

export default App;
