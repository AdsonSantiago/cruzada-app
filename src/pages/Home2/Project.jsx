import React from "react";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import HeroImg2 from "./HeroImg2.jsx";

function Project() {
    return (
        <div className="project">
            <Navbar />
            <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
            <Footer />
        </div>
    )
}

export default Project;