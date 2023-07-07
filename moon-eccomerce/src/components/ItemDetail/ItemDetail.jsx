import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCounter/ItemCounter"
import { useContext, useState } from "react"
import { CartContext } from "../CartContext.jsx/CartContext"
import ButtonsCart from "../ButtonsCart/ButtonsCart"

const ItemDetail = ({id, nombre, precio, descripcion, img, stock }) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const item = {
            id, nombre, precio, descripcion, img, cantidad
        }
        
        agregarAlCarrito(item)
    }


    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }


        return (
        <div className="cardDetail">
            <h2 className="prodName">{nombre}</h2>

            <img className="prodImg" src={img} alt={nombre}/>
            <p className="prodDesc">{descripcion}</p>

            <h4 className="prodPrice">Precio: ${precio}</h4>

            { 
                isInCart(id)
                    ?<ButtonsCart></ButtonsCart>
                    :<ItemCount 
                    stock={stock}
                    cantidad={cantidad} 
                    setCantidad={setCantidad}
                    handleAgregar={handleAgregar}
                    />
            }

            <button onClick={handleVolver}>Volver</button>
        </div>


        
    )
    
}


export default ItemDetail