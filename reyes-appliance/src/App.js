import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar/navbar';
import Home from './Home/home';
import Footer from './Footer/footer';
import Contact from './Contact/contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={ <Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
