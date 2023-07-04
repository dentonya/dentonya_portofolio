import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio /> 
      <Experience />
      <Contact /> 
      <SocialLinks />
      <Footer />
      
         </div>
  );
}

export default App;
