import { useState } from "react"


const ItemCount = ({stock, cantidad, setCantidad, handleAgregar}) => {
    

    const handleSumar = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const handleRestar = () => {
        if(cantidad > 1) {

            setCantidad(cantidad-1)
        }
    }

return(
    <div className="counterConteiner">
        <div className="counterControls">
            <button className="btnCounter" onClick={handleRestar}>-</button>
            <h4 className="counter" >{cantidad} </h4>
            <button className="btnCounter" onClick={handleSumar}>+</button>
        </div>

        <button className="btnAnadir" onClick={handleAgregar}>Añadir al carrito</button>
            
    </div>
)




}



export default ItemCount