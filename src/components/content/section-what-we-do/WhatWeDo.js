// noinspection JSValidateTypes

import "./WhatWeDo.css"
import Card from "./SectionOneCard/Card";
import icon1 from "../../../../src/assets/icons/icon1.png"
import icon2 from "../../../../src/assets/icons/icon2.png"
import icon3 from "../../../../src/assets/icons/icon3.png"
import icon4 from "../../../../src/assets/icons/icon4.png"
import {information} from "./information";
import {useState} from "react";


export default function WhatWeDo() {
    const [selected, setSelected] = useState("0");
    const [iconToDisplay, setIconToDisplay] = useState(icon1);

    function handleSelect(id, icon) {
        setSelected(id);
        setIconToDisplay(icon);
    }

    return(
        <section className={"section-what-we-do"}>
            <div className="section-what-we-do-cards-container" >
                <Card handleSelect={handleSelect} selected={selected} id={"0"} card_title={"Worldwide"} card_content={"Swift Development offers services to everyone in every country around the world."} icon={icon1}/>
                <Card handleSelect={handleSelect} selected={selected} id={"1"} card_title={"Amazing Service"} card_content={"We provide excellent services to all of our customers, making sure everything is perfect for you"} icon={icon2}/>
                <Card handleSelect={handleSelect} selected={selected} id={"2"} card_title={"Affordable Prices"} card_content={"We understand websites can be expensive, that's why we make sure anybody can afford their own custom website"} icon={icon3}/>
                <Card handleSelect={handleSelect} selected={selected} id={"3"} card_title={"Optimised Sites"} card_content={"Fast loading times, fast response times and highly accessible features are included in all of our websites"} icon={icon4}/>
            </div>
            <div className="section-what-we-do-selected-content">
                <img src={iconToDisplay} alt="" className="selected-icon"/>
                <h1>{information[selected]["title"]}</h1>
                <p>{information[selected]["content"]}</p>
            </div>
        </section>
    )
}