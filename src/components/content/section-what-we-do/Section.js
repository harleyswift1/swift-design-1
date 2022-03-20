// noinspection JSValidateTypes

import "./Section.css"
import Card from "./SectionOneCard/Card";
import icon1 from "../../../../src/assets/icons/icon1.png"
import icon2 from "../../../../src/assets/icons/icon2.png"
import icon3 from "../../../../src/assets/icons/icon3.png"
import icon4 from "../../../../src/assets/icons/icon4.png"
import {information} from "./information";
import {useState} from "react";


export default function Section() {
    const [selected, setSelected] = useState("0");
    const [iconToDisplay, setIconToDisplay] = useState(icon1);

    function handleSelect(id, icon) {
        setSelected(id);
        setIconToDisplay(icon);
    }

    return(
        <div className={"section-1"}>
            <div className="section-1-cards-container" >
                <Card handleSelect={handleSelect} selected={selected} id={"0"} card_title={"Lorem ipsum dolor."} card_content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consequatur?"} icon={icon1}/>
                <Card handleSelect={handleSelect} selected={selected} id={"1"} card_title={"Dolor sit amet"} card_content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum ea, error ipsa libero nam nihil porro quaerat recusandae ullam?"} icon={icon2}/>
                <Card handleSelect={handleSelect} selected={selected} id={"2"} card_title={"Adipisicing dolor amet"} card_content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores esse ex hic magni neque voluptate."} icon={icon3}/>
                <Card handleSelect={handleSelect} selected={selected} id={"3"} card_title={"Ad dicta enim, error"} card_content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus officia quis."} icon={icon4}/>
            </div>
            <div className="section-1-selected-content">
                <img src={iconToDisplay} alt="" className="selected-icon"/>
                <h1>{information[selected]["title"]}</h1>
                <p>{information[selected]["content"]}</p>
            </div>
        </div>
    )
}