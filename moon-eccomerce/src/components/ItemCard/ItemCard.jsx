
const ItemCard = ({items} ) => {

    return (
        <div>
            
                <div className="card">
                <h1 className="prodName"> {items.nombre}</h1>
                <img className="prodImg" src={items.img} alt={items.nombre} />
                <p className="prodDesc">{items.descripcion}</p>
                <h2 className="prodPrice">${items.precio}</h2>
            </div>
            
        </div>
    )
}

export default ItemCard