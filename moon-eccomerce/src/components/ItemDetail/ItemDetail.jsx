import { Link } from "react-router-dom"
import ItemCount from "../ItemCounter/ItemCounter"

const ItemDetail = ({nombre, precio, category, descripcion, img, stock }) => {

    return (
        <div className="cardDetail">
            <h2 className="prodName">{nombre}</h2>

            <img className="prodImg" src={img} alt={nombre}/>
            <p className="prodDesc">{descripcion}</p>

            <h4 className="prodPrice">Precio: ${precio}</h4>

            <ItemCount initial={1} stock={stock} />
        </div>

        
    )
    
}


export default ItemDetail