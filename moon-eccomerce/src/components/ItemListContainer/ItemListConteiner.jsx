import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase/config";

const ItemListContainer = ( {} ) => {

    const currentPath = window.location.pathname;

    const [productos, setProductos] = useState([])

    const {catId} = useParams ()

    useEffect(() => {
    const productosRef = collection(database, "productos")
    const q = catId
                ? query(productosRef, where("category", "==", catId))
                :productosRef
                
    getDocs(q)
        .then((resp) => {
            const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}) )
            setProductos(items)
        })
        .catch(e => console.log(e))
    
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