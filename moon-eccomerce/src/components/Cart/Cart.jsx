import { useContext } from "react"
import { CartContext } from "../CartContext.jsx/CartContext"
import {FaTrashAlt} from 'react-icons/fa'


const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarProducto} = useContext(CartContext)

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
            
            <div className="totalCart">
                <h5>Total de su compra: ${totalCompra()} </h5>
            </div> 
            <button className="emptyCart"onClick={vaciarCarrito} >Vaciar carrito</button>
        </div>
    )
}


export default Cart