import { createContext } from "react";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState ({
        logged: false,
        email: null,
    })

    const [error, setError] = useState(null)

    const login =  (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .catch(e =>setError(true))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch(e =>setError(true))
    }

    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                
                setUser({
                    
                    logged: true,
                    email: user.email
                })
                setError(false)
            } else {
                setUser({
                    logged: false,
                    email: null
                })
            }
        })
    }, [])

    const logout = () => {
        signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, error, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}