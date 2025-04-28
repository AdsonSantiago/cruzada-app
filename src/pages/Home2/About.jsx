import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";

function About() {
    return(
        <div className="about">
            <Navbar />
            <HeroImg2 heading="SOBRE." text="Im a friendly Front-End Developer." />
            <Footer />
        </div>
    )
}

export default About;