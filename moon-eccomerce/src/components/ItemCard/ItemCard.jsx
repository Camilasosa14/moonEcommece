import { Link } from "react-router-dom"

const ItemCard = ( {id, stock, nombre, precio, img}) => {

    return (
        <div>
                <div className="card">
                <h1 className="prodName"> {nombre}</h1>
                <img className="prodImg" src={img} alt={nombre} />
                <h2 className="prodPrice">${precio}</h2>

                {
                    stock <= 5 && stock > 0  
                    ? ( <>
                        <p className="alert">¡Últimas {stock} unidades!</p> 
                        <Link className="btnCard" to={`/detail/${id}`} >Más info</Link>
                    </>
                    ): stock === 0 ? (
                        <p className="alert">¡Sin stock!</p>
                    ): <Link className="btnCard" to={`/detail/${id}`} >Más info</Link>
                }
            </div>
        </div>
    )
}

export default ItemCard