import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListConteiner"
import './styles/styles.scss'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./components/CartContext.jsx/CartContext"
import Cart from "./components/Cart/CArt"


function App() {
  
  return (

    <CartProvider>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/productos/:catId" element={<ItemListContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to={"/"}/> } />
        </Routes>

      </BrowserRouter>
    </CartProvider>
      
  )
}

export default App