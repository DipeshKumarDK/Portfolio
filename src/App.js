import "./App.css";
import Header from "./components/Header";
import back from "./assets/backlight.png";
import Mid from "./components/Mid";
import Education from "./components/Education";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Project from "./components/Project";

function App() {
  return (
    <div className="">
        <Header />
        <Mid />
      <Overview/>
      <Education/>
      <Skills/>
      <div>
      {/* <Projects/> */}
      <Project/>
      </div>
      <Contact/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;
