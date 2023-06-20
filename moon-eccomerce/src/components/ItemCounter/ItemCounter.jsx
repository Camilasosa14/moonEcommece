import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

return(
    <div className="counterConteiner">
        <div className="counterControls">
            <button className="btnCounter" onClick={decrement}>-</button>
            <h4 className="counter" >{quantity} </h4>
            <button className="btnCounter" onClick={increment}>+</button>
        </div>

            <button className="btnAnadir" >Añadir al carrito</button>
    </div>
)




}



export default ItemCount