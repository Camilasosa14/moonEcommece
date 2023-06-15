import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../funcionalidades/pedirDatos";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ( {} ) => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams ()

    useEffect(() => {

        pedirDatos()
        .then((res) => {
            setItem(res.find((prod) => prod.id === Number(itemId)))
        })
        .catch((err) => console.log(err))
    }, [itemId])
    

    return (
        <div>
            {
            <ItemDetail {...item}></ItemDetail>
            }


        </div>
    )
}

export default ItemDetailContainer