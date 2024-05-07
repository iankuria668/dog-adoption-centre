import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink 
            to="/" 
            className="nav-link"
            > Home </NavLink> 
            <NavLink
                to="/About"
                className="nav-link"
                >
                About Us
            </NavLink>
            <NavLink 
             to="/Contact"
             className="nav-link"
            >
                Contact Us
            </NavLink>
        </nav>
    )
}

export default NavBar