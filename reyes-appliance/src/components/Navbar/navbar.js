import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./index.css";
import Burger from "../Burger/burger";

import Logo from '../../assets/images/reyesappliancelogowhite.png';

function Navbar() {
    const [hamburgerOpen, SethambuerOpen] = useState(false);

    const toggleHamburger = () => {
        SethambuerOpen(!hamburgerOpen)
    }

    return (
        <header className="navHeader">
            <nav className="navbar">
                <NavLink to="/" className="site-title"><img src={Logo} alt="Reyes Appliance Repair" className="Logo" /></NavLink>
                <ul className="innerNav" >
                    
                    <a href="tel:347-256-0951" className="anchor"> <button className="nav-contact-button"> Call Us </button> </a>
                </ul>
                <div className="Hamburger" onClick={toggleHamburger}>
                    <Burger isOpen={hamburgerOpen} />
                    {
                        hamburgerOpen ? <div className="burger-open">
                            <ul className="innerNav-mobile" >
                                
                                <a href="tel:347-256-0951" className="anchor"> <button className="nav-contact-button"> Call Us </button> </a>
                            </ul>
                        </div>
                            :
                            <div className="burger-close" />
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;