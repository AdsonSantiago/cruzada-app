import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.scss";

function Navbar() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <h1>Portfolio</h1>
            </Link>
            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link to="/portfolio">Home</Link>
                    </li>
                    <li>
                        <Link to="/projeto">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul> 
            </nav>
        </header>
    )
}

export default Navbar;