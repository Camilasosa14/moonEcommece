import ItemCard from "../ItemCard/ItemCard"
import { useLocation } from "react-router-dom";


const ItemList = ({item}) => {
    
    const location = useLocation();
    const currentPath = location.pathname;
    const categoryName = currentPath.split('/').pop();
    
    return(
        <>
        <div>
            <h2 className="prodTitle" >Nuestros productos: {categoryName}</h2>
            <div id="cardCont">
                {
                item.map((prod) => <ItemCard key={prod.id} {...prod} />)  
                }
            </div>
        </div>
        </>
    )
}

export default ItemList