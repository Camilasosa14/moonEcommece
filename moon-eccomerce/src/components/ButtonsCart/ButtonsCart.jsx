import { Link } from "react-router-dom"


const ButtonsCart = () => {
    return (
        <div className="btnConteiner">
            <Link className="btn" to="/">Seguir comprando </Link>
            <Link className="btn" to="/cart"> Finalizar compra</Link>
        </div>
    

    )
} 


export default ButtonsCart