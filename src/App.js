  import './App.css';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Navbar from './Navbar';
  import About from './About';
 import Services from './Services';
import Home from './Home';
import Elevators from './Elevators';
import Gallery from './Gallery';
import Videos from './Videos';
import Contactus from './Contactus';
import Footer from './Footer';
import Glossary from './Glossary';
import Testimonials from './Testimonials';


  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/elevators" element={<Elevators />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/glossary" element={<Glossary/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Routes>
        <Footer/>
      </Router>
    );
  }



  export default App;
