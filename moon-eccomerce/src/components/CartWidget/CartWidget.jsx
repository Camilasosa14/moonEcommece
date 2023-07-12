import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)
    return (
        <Link className="cartIcon" to="/cart">
            <img  src="../cartwid.png" alt="cart" className="cart"/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget