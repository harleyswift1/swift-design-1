import "./HeaderExpanded.css"
import {headerExpanded, showCollapsed, showExpanded} from "../../../../index";
import toggleNavbar from "../../../../assets/icons/toggle_navbar_white.png";

export default function HeaderExpanded() {

    function handleClick() {
        headerExpanded ? showCollapsed() : showExpanded();
    }

    return(
        <div className="header-expanded" id={"header-expanded"}>
            Expanded Header
            <img src={toggleNavbar} alt="" className="header-toggle-icon" onClick={handleClick}/>
        </div>
    )
}