import { createContext } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState ({
        logged: false,
        email: null,
        nombre: null
    })

    const login = (values) => {
        setUser({
            logged: true,
            email: values.email,
            nombre: values.nombre
        })
    }

    return (
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}