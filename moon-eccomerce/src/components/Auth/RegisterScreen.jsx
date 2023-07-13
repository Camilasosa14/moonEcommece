import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom"

const RegisterScreen = () => {
    const {register} = useContext(AuthContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido:'',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        register(values)
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
                <h2>Registrarse</h2>
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
                    value={values.apellido}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Apellido"
                    className="formInput"
                    name='apellido'
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

                    
                    <button className="btnForm" type="submit" >Registrarse</button>
                    <Link className="btnForm" type="submit" to="/login" >Ya estoy registrado</Link>
                </form>
            </div>

        </div>
    )
}

export default RegisterScreen