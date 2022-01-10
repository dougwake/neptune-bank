import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom'
import { useBankAPI } from '../contexts/BankAPI'
import AccountMiniList from './AccountMiniList'
import TransactionList from './TransactionList'
import { Table, TableBody, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    acctlist: {
        paddingBottom: "1.5em"
    }
}));

export default function TransactionPage() {
    const { id } = useParams()
    const classes = useStyles();

    const [transactions, setTransactions] = useState([])

    const { getAccounts, getTransactions } = useBankAPI()

    const loadTransactions = () => {
        getTransactions(id)
            .then(val => setTransactions(val))
    }

    useEffect(() => {
        loadTransactions()
    }, [])



    const [accounts, setAccounts] = useState([])

    const loadAccounts = () => {
        getAccounts()
            .then(val => setAccounts(val))
    }

    useEffect(() => {
        loadAccounts()
    }, [])

    const currentAccount = accounts.find(a => a.id == id)
    const nickname = currentAccount ?
        `${currentAccount.name} (${currentAccount.accountNumber}) ` : ""

    return (
        <>
            <div className={classes.acctlist}>
                <AccountMiniList accounts={accounts} currentID={id} />
            </div>
            <Typography variant="h5">Transactions for {nickname}</Typography>
            <Table size="small" >
                <TableBody>
                    <TransactionList transactions={transactions} nickname={nickname} />
                </TableBody>
            </Table>
        </>
    )
}
