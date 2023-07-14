import { useContext, useDebugValue, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"


const LoginScreen = () => {
    const {login, user} = useContext(AuthContext)
    const navigate = useNavigate()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleSubmit =  (e) => {
        e.preventDefault ()

        login(values)
        user.logged 
            ? navigate("/")
            : alert ("Error en los datos") 
        
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }

    return (
        <div className="authContainer">
            <div className="authModal">
                <h2>Iniciar sesión</h2>
                <hr />
                <form onSubmit={handleSubmit}>

                    <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="Email"
                    className="formInput"
                    name='email'
                    />

                    <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="Contraseña"
                    className="formInput"
                    name='password'
                    />

                    <button className="btnForm" type="submit">  Iniciar sesión</button>

                    <Link to="/register" className="link">Registrarse</Link>
                </form>
            </div>
        </div>
    )

}

export default LoginScreen