import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
    return (
        <header className="navHeader">
            <nav className="navbar">
                <NavLink to="/" className="site-title">REYES APPLIANCE REPAIR</NavLink>
                <ul className="innerNav">
                    
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
            </nav>
        </header>
    );
};

export default Navbar;