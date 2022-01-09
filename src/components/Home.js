import { Button } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase'

export default function Home() {

    const { currentUser, logout } = useAuth()
    let navigate = useNavigate()

    console.log(currentUser ? currentUser.email : "no current user")

    async function handleLogout() {
        // setError('')

        try {
            await logout()
            navigate("/login", { replace: true });

        } catch{
            console.log("Failed to log out")
        }
    }

    return (
        <>
            <h1>Home</h1>
            <Button onClick={handleLogout}>Sign Out</Button>
        </>
    )
}
