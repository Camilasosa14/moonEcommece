import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../funcionalidades/pedirDatos";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom"

const ItemListContainer = ( {} ) => {

    const currentPath = window.location.pathname;

    const [productos, setProductos] = useState([])

    const {catId} = useParams ()

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
    
    if (currentPath  == "/") {
        return (
            <>
            <div className="homeContainer">
                <h2 className="title">Bienvenido a Moon</h2>
            <h3 className="greeting">Tu nueva tienda de diseño favorita</h3>
            </div>
            
            <ItemList item={productos} /> 
            </>
            
        )
    } 
    return (
        <ItemList item={productos} /> 
    )

    
    

}

export default ItemListContainer