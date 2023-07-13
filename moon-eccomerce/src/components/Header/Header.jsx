import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import {FaRegUserCircle} from "react-icons/fa"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

const Header = () => {

    const {user, logout} = useContext(AuthContext)
    return (
        <header>
            <div className="header_container"> 
                <Link to="/"><img className="logo" src="../logo.jpg" alt="logo" /></Link>

                <nav className="navbar">
                    <ul>
                        <li>
                            <Link className="nav_link" to="/">Inicio</Link>                    
                        </li>
                        <li>
                            <Link className="nav_link" to="/productos/plateria">Platería</Link>                    
                        </li>
                        <li>
                            <Link className="nav_link" to="/productos/textiles">Textiles</Link>
                        </li>
                        <li>
                            <Link className="nav_link" to="/productos/art">Art</Link>
                        </li>
                    </ul>
                </nav>
                
                <CartWidget></CartWidget>

                {
                    user.logged 
                    ? <>
                    <button onClick={logout}>OUT</button>
                    </>
                    :<>
                    <Link to="/login"><FaRegUserCircle/></Link>
                    
                    </>
                }
                

            </div>
        </header>
    )
}

export default Header