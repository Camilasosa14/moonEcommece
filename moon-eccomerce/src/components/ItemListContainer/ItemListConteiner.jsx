import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../funcionalidades/pedirDatos";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom"

const ItemListContainer = ( {} ) => {

    const [productos, setProductos] = useState([])

    const {catId} = useParams ()
    console.log (catId)

    useEffect(() => {
        pedirDatos()
        .then((res) => {
            if (!catId) {
                setProductos(res)
            } else {
                setProductos( res.filter((items) => items.category === catId) )
            }
        })
    }, [catId])
    

    return (
        <div>

            <ItemList item={productos} /> 

        </div>
    )
}

export default ItemListContainer