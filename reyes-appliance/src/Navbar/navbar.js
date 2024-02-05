import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./index.css";
import Burger from "../Burger/burger";

import Logo from '../images/reyesappliancelogowhite.png';

function Navbar() {
    const [hamburgerOpen, SethambuerOpen] = useState(false);

    const toggleHamburger = () => {
        SethambuerOpen(!hamburgerOpen)
    }

    return (
        <header className="navHeader">
            <nav className="navbar">
                <NavLink to="/" className="site-title"><img src={Logo} alt="Reyes Appliance Repair" className="Logo"/></NavLink>
                <ul className="innerNav" >
                    <NavLink to="/About">
                        ABOUT
                    </NavLink>
                    <NavLink to="/Services">
                        OUR SERVICES
                    </NavLink>
                    <NavLink to="/Contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/Reviews">
                        REVIEWS
                    </NavLink>

                </ul>
                <div className="Hamburger" onClick={toggleHamburger}>
                    <Burger isOpen={hamburgerOpen} />
                    {
                        hamburgerOpen ? <div className="burger-open">
                            <ul className="innerNav-mobile" >
                                <NavLink to="/About">
                                    ABOUT
                                </NavLink>
                                <NavLink to="/Services">
                                    OUR SERVICES
                                </NavLink>
                                <NavLink to="/Contact">
                                    CONTACT
                                </NavLink>
                                <NavLink to="/Reviews">
                                    REVIEWS
                                </NavLink>

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