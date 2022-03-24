import './HeaderCollapsed.css'
import {headerExpanded, showCollapsed, showExpanded} from "../../../../index";
import toggleNavbar from "../../../../assets/icons/toggle_navbar_green.png";

export default function HeaderCollapsed() {

    function handleClick() {
        headerExpanded ? showCollapsed() : showExpanded();
    }

    return (
        <header className={"header-collapsed"} id={"header-collapsed"}>
            <div className="header-collapsed-content">
                <h1 className={"header-collapsed-title"}>SWIFT</h1>
                <div className="header-collapsed-navbar-items">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Portfolio</span>
                    <span>Contact Us</span>
                </div>
                <img src={toggleNavbar} alt="" className="header-toggle-icon" onClick={handleClick}/>
            </div>
        </header>
    )
}