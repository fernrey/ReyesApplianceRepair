import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar/navbar';
import Home from './Home/home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer className="footer"> footer</footer>
    </div>
  );
}

export default App;
