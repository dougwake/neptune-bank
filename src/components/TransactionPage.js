import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBankAPI } from '../contexts/BankAPI'
import AccountMiniList from './AccountMiniList'


export default function TransactionPage() {
    const { id } = useParams()

    const [accounts, setAccounts] = useState([])

    const { getAccounts } = useBankAPI()

    const loadAccounts = () => {
        getAccounts()
            .then(val => setAccounts(val))
    }

    useEffect(() => {
        loadAccounts()
    }, [])

    return (
        <AccountMiniList accounts={accounts} currentID={id} />
    )
}
