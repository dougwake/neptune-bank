import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import { useBankAPI } from '../contexts/BankAPI';

export default function Home() {

    const { logout } = useAuth()
    const [accounts, setAccounts] = useState([])

    const { currentUser, getAccounts } = useBankAPI()

    let navigate = useNavigate()

    // Just to test out the DevBankAPI:
    console.log(currentUser ? currentUser.uid : "no current user")
    console.log("accounts: ")
    console.log(accounts);

    const loadAccounts = () => {
        getAccounts()
            .then(val => setAccounts(val))
    }

    useEffect(() => {
        loadAccounts()
    }, [])

    async function handleLogout() {

        try {
            await logout()
            navigate("/login", { replace: true });

        } catch {
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
