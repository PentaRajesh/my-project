import './App.css'
import Navbar from './compopnents/Navbar';
import Home from './compopnents/Home';
import Skills from './compopnents/skills';
import About from './compopnents/About';
import Portfolio from './compopnents/portfolio';
import Testimonials from './compopnents/Testimonials';
import Contact from './compopnents/Contact';
import Footer from './compopnents/Footer';
function App() {
  return <>
    <Navbar/>
    <Home/>
    <Skills/>
    <About/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
</>;
  
}

export default App;
