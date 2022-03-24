import "./FlowChartItem.css"

export default function FlowChartItem(props) {

    const title = props.title;
    const content = props.content;
    const stage = props.stage;
    const icon = props.icon;

    return(
        <div className="flow-chart-item">
            <span className="flow-chart-item-stage">{stage}.</span>
            <div className="flow-chart-item-widget">
                <div className="flow-chart-item-content">
                    <div className="flowchart-item-title">{title}</div>
                    <p className={"flowchart-item-content"}>{content}</p>
                    <img src={icon} alt="" className="flowchart-item-icon"/>
                </div>
            </div>
        </div>
    )
}