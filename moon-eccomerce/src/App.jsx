import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListConteiner"
import './styles/styles.scss'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/productos/:catId" element={<ItemListContainer/>} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Navigate to={"/"}/> } />
      </Routes>

    </BrowserRouter>
  )
}

export default App