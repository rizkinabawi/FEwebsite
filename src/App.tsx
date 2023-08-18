import { Navbar } from "./components/component/nav/Navbar";
import { Projects } from "./components/layouts/Projects/projects";
import { Heros } from "./components/pages/heros";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { TechStack } from "./components/layouts/TechStack/TechStack";
import Service from "./components/layouts/Service/Services";
import {Contact} from "./components/layouts/Contact/Contact";
import { Footer } from "./components/component/footer/Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   
      <div className="  flex flex-col items-center">
        <Navbar></Navbar>
        <Heros></Heros>
        <Projects />
        <TechStack />
        <Service />
        <Contact />
        <Footer/>

       
      </div>
    
  );
}

export default App;
