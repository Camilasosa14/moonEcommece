import { useContext, useDebugValue, useState, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"




const LoginScreen = () => {
    const {login, user, error} = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user.logged && !error){
        navigate("/")
    }else if(error){
        Swal.fire({
            icon: 'error',
            title: 'Datos incorrectos',
            text: 'Email o contraseña incorrecta',
            footer: 'Si no tenés cuenta, dirigite a Registrarse',
            confirmButtonColor:'#ad41168e',
        })
        
    }
    },[user, error])


    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleSubmit =  (e) => {
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