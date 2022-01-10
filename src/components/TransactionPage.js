import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useParams } from 'react-router-dom'
import { useBankAPI } from '../contexts/BankAPI'
import AccountMiniList from './AccountMiniList'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import Transaction from './Transaction';

const useStyles = makeStyles((theme) => ({
    acctlist: {
        paddingBottom: "1.5em"
    }
}));

export default function TransactionPage() {
    const { id } = useParams()
    const classes = useStyles();

    const theme = useTheme();
    const useSmallFormat = useMediaQuery(theme.breakpoints.down("md"));
    console.log("Small format: " + useSmallFormat)

    const [currentAccountID, setCurrentAccountID] = useState(0)


    const [transactions, setTransactions] = useState([])

    const { getAccounts, getTransactions } = useBankAPI()

    const loadTransactions = () => {
        getTransactions(currentAccountID)
            .then(val => setTransactions(val))
    }


    useEffect(() => {
        loadTransactions()
    }, [currentAccountID])

    if (id !== currentAccountID) {
        setCurrentAccountID(id)
    }


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
                <TableHead>
                    {useSmallFormat ? (
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Balance</TableCell>
                        </TableRow>
                    ) : (
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Withdrawal</TableCell>
                            <TableCell align="right">Deposit</TableCell>
                            <TableCell align="right">Balance</TableCell>
                        </TableRow>
                    )}
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => {
                        return <Transaction transaction={transaction} useSmallFormat={useSmallFormat} />
                    })}
                </TableBody>
            </Table>
        </>
    )
}
