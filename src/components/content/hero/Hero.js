import "./Hero.css"
import hero_bg from "../../../assets/images/hero-bg-1.png"

export default function Hero() {
    return (
        <div className={"hero"}>
            <div className="hero-items">
                <div className={"hero-titles"}>
                   <h1>Web designs, for <u>you</u></h1>
                    <p>Swift Development offers various types of custom-coded websites including blogs, business websites and personal websites, personalised for you. </p>
                    <button>Learn More</button>
                </div>
                <img src={hero_bg} alt="illustration"/>
            </div>
        </div>
    )
}