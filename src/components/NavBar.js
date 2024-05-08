import { NavLink } from "react-router-dom";
import {Link} from 'react-router-dom';
import "./NavBar.css"
import "./logo.png"


function NavBar(){
    return(
        <nav  className="navbar">
            <div className="Container">
                <div className="logo">
                </div>
                <div  className="nav-elements">
                    <ul>
                        <li className="text-emerald-600 text-5xl font-bold">
                            THE ROYAL PETS
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
                        <li>
                        <Link to={"https://api.thedogapi.com/v1/breeds/"}>The Dog API</Link>
                        </li>
                        <li>More Pages</li>
                        <li>And More Pages</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar