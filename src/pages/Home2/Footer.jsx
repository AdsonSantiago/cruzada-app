import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import "./FooterStyles.scss";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                    </div>
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Mauá City.</p>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                            11-99905-2331
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                            adsonsantiago@hotmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>Essa é uma das minhas ferramentas de trabalho
                        Estou desenvolvendo novos projetos e outros design.
                    </p>
                    <div className="social">
                     <FaFacebook size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                     <FaLinkedin size={20} style={{ color:"#fff", marginRight: "2rem" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;