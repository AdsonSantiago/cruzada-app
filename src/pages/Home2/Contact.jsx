import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";

function Contact() {
    return(
        <div className="contact">
            <Navbar />
            <HeroImg2 heading="CONTATO." text="Lets have a chat"/>
            <Footer />
        </div>
    )
}

export default Contact;