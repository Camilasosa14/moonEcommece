import { createContext } from "react";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState ({
        logged: false,
        email: null,
    })

    const login =  (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .catch(e => console.log(e))
    }

    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                
                setUser({
                    
                    logged: true,
                    email: user.email
                })
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
        <AuthContext.Provider value={{user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}