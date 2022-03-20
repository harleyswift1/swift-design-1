import "./Section.css"
import Card from "./SectionOneCard/Card";
import icon1 from "../../../../src/assets/icons/icon1.png"
import icon2 from "../../../../src/assets/icons/icon2.png"
import icon3 from "../../../../src/assets/icons/icon3.png"
import icon4 from "../../../../src/assets/icons/icon4.png"


export default function Section() {
    return(
        <div className={"section-1"}>
            <div className="section-1-cards-container">
                <Card card_title={"Lorem ipsum dolor."} card_content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consequatur?"} icon={icon1}/>
                <Card card_title={"Dolor sit amet"} card_content={"Content goes here"} icon={icon2}/>
                <Card card_title={"Adipisicing dolor amet"} card_content={"Content goes here"} icon={icon3}/>
                <Card card_title={"Ad dicta enim, error"} card_content={"Content goes here"} icon={icon4}/>
            </div>
            <div className="section-1-selected-content">
                <div className="selected-icon"/>
                <h1>Header</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dicta dolorem doloremque doloribus impedit, ipsa laudantium magni natus quam quo quod sapiente soluta velit! Aperiam consectetur cum praesentium ullam velit.</p>
            </div>
        </div>
    )
}