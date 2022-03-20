import './Header.css'

export default function Header() {
    return(
        <header className={"header"}>
            <span className={"title"}>SWIFT</span>
            <div className="header-navbar-items">
                <span>Home</span>
                <span>About Us</span>
                <span>Portfolio</span>
                <span>Contact Us</span>
            </div>
            <div />
        </header>
    )
}