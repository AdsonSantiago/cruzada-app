import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.scss";


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrolly >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);


    return (
        <header className={color ? "header header-bg" : "header"}>
            <Link to="/" className="logo">
                <h1>Portfolio</h1>
            </Link>
            <nav >
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/portfolio">Home</Link>
                    </li>
                    <li>
                        <Link to="/project">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    ) : (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;