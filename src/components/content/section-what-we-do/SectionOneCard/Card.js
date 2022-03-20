import "./Card.css"
import {useState} from "react";
import Divider from "../../../utils/divider/Divider";
import rightArrow from "../../../../assets/icons/icon_arrow_right.png";

export default function Card(props) {

    const [selected, setSelected] = useState(0);

    return(
        <div className="card">
            <div className="card-content">
                <div className={"card-contents-header"}>
                    <img src={props.icon} alt=""/>
                    <h1>{props.card_title}</h1>
                </div>
                <p className={"card-content-description"}>{props.card_content}</p>
                <Divider width={"9"} backgroundColor={"red"} />
                <div className={"card-content-learn-more"}>
                    <span>Learn More</span>
                    <img src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    )
}