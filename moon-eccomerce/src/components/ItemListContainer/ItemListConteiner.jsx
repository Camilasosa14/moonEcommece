import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../funcionalidades/pedirDatos";
import ItemList from "../ItemList/itemList";

const ItemListContainer = ( {} ) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
        .then((res) => {
            setProductos(res)
        })
    }, [])
    

    return (
        <div>

            <ItemList item={productos} /> 

        </div>
    )
}

export default ItemListContainer