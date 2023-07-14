import './styles/styles.scss'
import {AuthContextProvider } from "./components/Context/AuthContext"
import { CartProvider } from "./components/Context/CartContext"
import AppRouter from "./components/AppRouter/AppRouter"



function App() {
  

  return (
  <AuthContextProvider>
    <CartProvider>
      <AppRouter/>
    </CartProvider>
  </AuthContextProvider>
  )
}

export default App