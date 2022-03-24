import './Content.css'
import HeaderCollapsed from "./header/header-collapsed/HeaderCollapsed";
import Hero from "./hero/Hero";
import WhatWeDo from "./section-what-we-do/WhatWeDo";
import FlowChart from "./section-flow-chart/FlowChart";
import HeaderExpanded from "./header/header-expanded/HeaderExpanded";


// all containers
export default function Content() {
    return (
        <div className={"page"}>
            <div className={"content"}>
                <HeaderCollapsed/>
                <HeaderExpanded />
                <Hero/>
                <WhatWeDo/>
                <FlowChart/>
            </div>
        </div>
    )
}