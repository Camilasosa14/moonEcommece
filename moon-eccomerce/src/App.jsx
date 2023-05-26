import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListConteiner"
import './App.css'

function App() {
  
  return (
    <div>
      <Header/>
      
      <ItemListContainer greeting="Bienvenido a Moon, tu nueva tienda de diseño favorita"></ItemListContainer>
    </div>
  )
}

export default App