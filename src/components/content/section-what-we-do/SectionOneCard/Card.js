import "./Card.css"
import Divider from "../../../utils/divider/Divider";
import rightArrow from "../../../../assets/icons/icon_arrow_right.png";

export default function Card(props) {

    const icon = props.icon;
    const title = props.card_title;
    const content = props.card_content;
    const selected = props.selected;
    const id = props.id;

    return (
        <div className="card" style={{ borderLeft: selected === id ? '8px solid var(--primary-color)': '8px solid #ffffff'}} onClick={r =>
            props.handleSelect(id, icon)}>
            <div className="card-content">
                <div className={"card-contents-header"}>
                    <img className={"icon-img"} src={icon} alt=""/>
                    <h1>{title}</h1>
                </div>
                <p>{content}</p>
                <Divider width={"12"} backgroundColor={"red"}/>
                <div className={"card-content-learn-more"}>
                    <span>Learn More</span>
                    <img className={"learn-more-arrow"} src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    )
}