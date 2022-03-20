import './Content.css'
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Section from "./section-what-we-do/Section";


// all containers
export default function Content() {
    return (
        <div className={"content"}>
            <Header/>
            <Hero />
            <Section id={"what-we-offer"} />
        </div>
    )
}