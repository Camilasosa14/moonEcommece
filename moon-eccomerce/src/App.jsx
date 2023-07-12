import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListConteiner"
import './styles/styles.scss'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./components/Context/CartContext"
import Cart from "./components/Cart/CArt"
import LoginScreen from "./components/Auth/LoginScreen"
import { AuthContextProvider } from "./components/Context/AuthContext"


function App() {
  
  return (
  <AuthContextProvider>
    <CartProvider>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/productos/:catId" element={<ItemListContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to={"/"}/> } />
          <Route path="/login" element={<LoginScreen/>} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  </AuthContextProvider>
  )
}

export default App