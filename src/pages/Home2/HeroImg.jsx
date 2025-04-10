import "./heroimgStyle.scss";
import IntroImg from "../../assets/logo03.avif"
import { Link } from "react-router-dom";

function HeroImg() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img"
                    src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>OLÁ, EU SOU UM FREELANCE.
                </p>
                <h1>React Developer.</h1>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    )
}

export default HeroImg;