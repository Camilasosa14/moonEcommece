import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { query, writeBatch, documentId, collection, addDoc, updateDoc, doc, getDocs, where } from "firebase/firestore"
import { database } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import Swal from "sweetalert2"




const Order = () => {

    const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)
    const [orderId, setOrderId] = useState (null)

    const [values, setValues] = useState ({
        nombre: '',
        apellido:'',
        direccion: '',
        email:'',
        telefono:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        if(values.nombre.length === 0 || values.nombre.length < 3){
            Swal.fire({
                icon: 'error',
                text: 'El nombre es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if(values.apellido.length === 0 || values.apellido.length < 3){
            Swal.fire({
                icon: 'error',
                text: 'El apellido es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if(values.direccion.length === 0 || values.direccion.length < 6 ){
            Swal.fire({
                icon: 'error',
                text: 'La dirección es obligatoria',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if(values.email.length === 0 ){
            Swal.fire({
                icon: 'error',
                text: 'El email es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if(values.telefono.length === 0 ){
            Swal.fire({
                icon: 'error',
                text: 'El telefono es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
            
        }

        const batch = writeBatch(database)
        const ordersRef = collection(database, "ordenes de compra") 
        const productosRef = collection(database, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                    .then((doc) => {
                        setOrderId(doc.id)
                        vaciarCarrito()
                    })
                    .catch (err => console.log(err))
                })
        } else {
            alert("sin stock")
        }

    }

    if (orderId) {
        return (
            <div className="ordenContainer">
                <h2>Tu compra se realizó exitosamente</h2>
                <hr />
                <p>Tu código de seguimiento es: <strong>{orderId}</strong></p>
                <Link className="link" to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }


    return (
        <div className="ordenContainer">
            <h2>Orden de compra</h2>

            <form className="formOrden" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    name="nombre"
                    className="inputForm"
                />

                <input 
                    type="text" 
                    placeholder="Apellido"
                    onChange={handleInputChange}
                    value={values.apellido}
                    name="apellido"
                    className="inputForm"
                />
                
                <input 
                    type="text" 
                    placeholder="Dirección"
                    onChange={handleInputChange}
                    value={values.direccion}
                    name="direccion"
                    className="inputForm"
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={values.email}
                    name="email"
                    className="inputForm"
                />
                <input 
                    type="tel" 
                    placeholder="Telefono"
                    onChange={handleInputChange}
                    value={values.telefono}
                    name="telefono"
                    className="inputForm"
                />
                
                <button className="btnSubmit"type="submit">Enviar</button>


            </form>
        </div>
    )
}

export default Order 