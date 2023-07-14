import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"



const RegisterScreen = () => {
    const {register} = useContext(AuthContext)
    const navigate = useNavigate()

    const [values, setValues] = useState({
        nombre: '',
        apellido:'',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        if (values.nombre.length === 0 || values.nombre.length < 3){
            Swal.fire({
                icon: 'error',
                text: 'Por favor complete el nombre',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if (values.apellido.length === 0 || values.apellido.length < 3){
            Swal.fire({
                icon: 'error',
                text: 'El apellido es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }
        if (values.email.length === 0 || values.email.length < 3){
            Swal.fire({
                icon: 'error',
                text: 'El email es obligatorio',
                confirmButtonColor:'#ad41168e',
            })
            return
        }

        if (values.password.length === 0 || values.password.length < 6){
            Swal.fire({
                icon: 'error',
                text: 'Ingrese una contraseña de al menos 6 caracteres',
                confirmButtonColor:'#ad41168e',
            })
            return
        }
        register(values)
        navigate("/")

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
                    <Link  className="link" type="submit" to="/login" >Ya estoy registrado</Link>
                </form>
            </div>

        </div>
    )
}

export default RegisterScreen