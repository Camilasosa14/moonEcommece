import { Link } from "react-router-dom"

const ItemDetail = ({nombre, precio, category, descripcion, img}) => {

    return (
        <div className="cardDetail">
            <h2 className="prodName">{nombre}</h2>

            <img className="prodImg" src={img} alt={nombre}/>
            <p className="prodDesc">{descripcion}</p>

            <h4 className="prodPrice">Precio: ${precio}</h4>
            <Link className="btnAnadir">Añadir al carrito</Link>
        </div>
    )
}

export default ItemDetail