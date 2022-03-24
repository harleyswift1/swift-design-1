import "./FlowChart.css"
import FlowChartItem from "./flow-chart-item/FlowChartItem";
import process_icon1 from "../../../assets/icons/process_icon1.png";
import process_icon2 from "../../../assets/icons/process_icon2.png";
import process_icon3 from "../../../assets/icons/process_icon3.png";
import process_icon4 from "../../../assets/icons/process_icon4.png";
import process_icon5 from "../../../assets/icons/process_icon5.png";

export default function FlowChart() {
    return(
        <section className="section-flow-chart">
            <h1>The Development Process</h1>
            <div className="flow-chart-content">
                <FlowChartItem stage={1} title={"Client Brief"} content={"The client requirements will be discussed between both parties to understand what is required."} icon={process_icon1}/>
                <FlowChartItem stage={2} title={"Plan"} content={"A plan will be created that involves meeting the client requirements. A price and timeframe will also be included."} icon={process_icon2}/>
                <FlowChartItem stage={3} title={"Development"} content={"The development stage includes the developer creating the website for the client and posting regular updates and previews."} icon={process_icon3}/>
                <FlowChartItem stage={4} title={"Final Touches"} content={"Leading up to peparation for launch, final touches will be issued to make it perfect for the client."} icon={process_icon4}/>
                <FlowChartItem stage={5} title={"Deployment"} content={"The website will be deployed for the world to view with a custom domain (if chosen), DDoS protection, fast hosting, and technical support."} icon={process_icon5}/>
            </div>
        </section>
    )
}