import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import {FaTrashAlt} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"


const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    const {user} = useContext(AuthContext)
    if (cart.length === 0) {
        return(
            <div className="empty_cart">
                <h2>Tu carrito está vacio</h2>
                <Link className="btnCard" to="/">Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="cartContainer">
            <h2 > Tu compra</h2>
            <div className=" prodContainer">
            {
                cart.map((prod) => (
                    <div className="itemCart" key={prod.id}>
                        
                        <h4> {prod.nombre}</h4>
                        <img className="imgCart" src={prod.img}  alt={prod.nombre}  />
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.cantidad} </p>
                        <button className="deleteBtn" onClick={() => eliminarProducto(prod.id)}><FaTrashAlt/></button>
                        
                        
                    </div>
                ))
            }

            </div>
            <h5 className="totalCart">Total de su compra: ${totalCompra()} </h5>
            <div>
                <button className="btns_cart emptyCart"onClick={vaciarCarrito} >Vaciar carrito</button>

                {
                    user.logged
                    ? <>
                    <Link to="/order" className="btns_cart btn_finalizar">Finalizar compra</Link>
                    </>
                    : <>
                    <Link to="/login" className="btns_cart btn_finalizar" >Finalizar compra</Link>
                    </>
                }
            
            </div> 
            
        </div>
    )
}


export default Cart