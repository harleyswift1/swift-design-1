import './Header.css'

export default function Header() {
    return (
        <header className={"header"}>
            <div className="header-content">
                <h1 className={"title"}>SWIFT</h1>
                <div className="header-navbar-items">
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Portfolio</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </header>
    )
}