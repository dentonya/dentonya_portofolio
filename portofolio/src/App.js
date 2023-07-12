import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import {WhatsApp} from "./components/WhatsApp";
import { SocialLinks } from "./components/SocialLinks";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Test />
      <About /> 
      <Portfolio /> 
      <Experience /> 
      <Contact />
      <SocialLinks />
      <WhatsApp />
      
      <Footer />
      
         </div>
  );
}

export default App;
