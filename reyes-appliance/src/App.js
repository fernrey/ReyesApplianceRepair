import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact';
import About from './pages/About/about';
import Services from './pages/Services/services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
