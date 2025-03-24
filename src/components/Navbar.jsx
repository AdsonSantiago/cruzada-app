import React from "react"
import "./NavbarStyles.scss"

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="header">
            <Link to="">
            <h1>Portifolio</h1>
            
            </Link>
            <ul>
                <li>
                    <Link to="/Home2"></Link>
                </li>
                <li>
                    <Link to="/projeto"></Link>
                </li>                <li>
                    <Link to="/about"></Link>
                </li>                <li>
                    <Link to="/contato"></Link>
                </li>
            </ul> 
        </div>
    )
}

export default Navbar;