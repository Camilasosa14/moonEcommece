import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"

const LoginScreen = () => {
    const {login} = useContext(AuthContext)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        login(values)
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
                    value={values.nombre}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Nombre"
                    className="formInput"
                    name='nombre'
                    />

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

                    <button className="btnForm" type="submit" >Iniciar sesión</button>
                    <button className="btnForm">Registrarse</button>
                </form>
            </div>

        </div>
    )
}

export default LoginScreen