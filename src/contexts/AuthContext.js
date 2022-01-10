import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState();
    const [loading, setLoading] = useState(true);

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setAuthUser(user);
            setLoading(false);
        })

        return unsubscribe
    }, [])

    const value = {
        authUser,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}