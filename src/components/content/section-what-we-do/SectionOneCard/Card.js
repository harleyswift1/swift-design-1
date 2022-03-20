import "./Card.css"
import Divider from "../../../utils/divider/Divider";
import rightArrow from "../../../../assets/icons/icon_arrow_right.png";

export default function Card(props) {

    const icon = props.icon;

    return (
        <div className="card" style={{ borderLeft: props.selected === props.id ? '8px solid var(--primary-color)': '8px solid #ffffff'}} onClick={r =>
            props.handleSelect(props.id, icon)}>
            <div className="card-content">
                <div className={"card-contents-header"}>
                    <img className={"icon-img"} src={icon} alt=""/>
                    <h1>{props.card_title}</h1>
                </div>
                <p className={"card-content-description"}>{props.card_content}</p>
                <Divider width={"12"} backgroundColor={"red"}/>
                <div className={"card-content-learn-more"}>
                    <span>Learn More</span>
                    <img className={"right-arrow"} src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    )
}