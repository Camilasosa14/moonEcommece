import Header from "../Header/Header"
import ItemListContainer from "..//ItemListContainer/ItemListConteiner"

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "..//ItemDetailContainer/ItemDetailContainer"
import Cart from "..//Cart/CArt"
import LoginScreen from "..//Auth/LoginScreen"
import RegisterScreen from "..//Auth/RegisterScreen"
import Order from "..//Order/Order"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import Footer from "../Footer/Footer"

const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return (

        <BrowserRouter>
        
            <Header/>
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/productos/:catId" element={<ItemListContainer/>} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="*" element={<Navigate to={"/"}/> } />
                <Route path="/login" element={<LoginScreen/>} />
                <Route path="/register" element={<RegisterScreen/>} />
                <Route path="/order" element={<Order/>} />
                
                </Routes>
                
                <Footer/>
            </BrowserRouter>


    )   
}

export default AppRouter