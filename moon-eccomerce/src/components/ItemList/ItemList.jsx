import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({item}) => {
    
    return(
        <div className="list_container">
            <h2 className="title">Hola!</h2>
            <p className="greeting">Bienvenido a Moon, tu nueva tienda de diseño favorita</p>

<div id="cardCont">
    {
                item.map((prod) => <ItemCard key={prod.id} items={prod} />)  
                
            }
</div>
            
        </div>
    )
}

export default ItemList