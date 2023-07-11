import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase/config";

const ItemDetailContainer = ( {} ) => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams ()

    useEffect(() => {
        const itemRef = doc(database, "productos", itemId)

        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch(e => console.log(e))

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