import { NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar(){
    return(
        <nav  className="navbar">
            <div className="Container">
                <div className="logo">
                </div>
                <div  className="nav-elements">
                    <ul>
                        <li className="logo-dog">
                        <img  src = "./logo.jpg" alt = "Dog Icon "></img>
                        </li>
                        <li>
                        <NavLink 
                        to="/" 
                        > Home 
                        </NavLink>    
                        </li>
                        <li>
                        <NavLink
                        to="/About"
                        > About Us
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                        to="/Contact"
                        >Contact Us
                        </NavLink>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar