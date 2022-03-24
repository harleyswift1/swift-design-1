import "./Hero.css"
import hero_bg from "../../../assets/images/hero-bg-1.png"
import {headerExpanded, showCollapsed, showExpanded} from "../../../index";

export default function Hero() {
    return (
        <div className={"hero"}>
            <div className="hero-items">
                <div className={"hero-titles"}>
                   <h1>Establishing your business begins <u>here</u>...</h1>
                    <p>Swift Development offers various types of custom-made websites including blogs, business and personal websites, personalised for you. </p>
                    <button>Learn More</button> {/*make this functional lol*/}
                </div>
                <img src={hero_bg} alt="illustration"/>
            </div>
        </div>
    )
}