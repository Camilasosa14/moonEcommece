const Header = () => {

    return (
        <header className="header">
            <div className="header_container"> 
                <img className="logo" src="./assets/logo.png" alt="logo" />

                <nav className="navbar">
                    <a className="nav_link" href="#">PLATERÍA</a>
                    <a className="nav_link" href="#">TEXTILES</a>
                    <a className="nav_link" href="#">ART</a>
                </nav>
            </div>
        </header>
    )
}

export default Header