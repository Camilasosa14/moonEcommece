import CartWidget from "../CartWidget/CartWidget"

const Header = () => {

    return (
        <header>
            <div className="header_container"> 
                <img className="logo" src="./logo.jpg" alt="logo" />

                <nav className="navbar">
                    <ul>
                        <li>
                            <a className="nav_link" href="#">Platería</a>                    
                        </li>
                        <li>
                            <a className="nav_link" href="#">Textiles</a>
                        </li>
                        <li>
                            <a className="nav_link" href="#">Art</a>
                        </li>
                    </ul>
                </nav>
                
                <CartWidget></CartWidget>
            </div>
        </header>
    )
}

export default Header