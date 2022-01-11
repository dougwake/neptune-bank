import React, { useEffect, useState } from 'react'
import { makeStyles, Table, TableBody, Typography } from '@material-ui/core'
import { useBankAPI } from '../contexts/BankAPI';
import AccountList from './AccountList';

export default function Home() {

    const [accounts, setAccounts] = useState([])

    const { currentUser, getAccounts } = useBankAPI()

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 800,
        },
        AccountSummary: {
            marginTop: "0.5em",
            marginBottom: "0.75em"
        }
    }));

    const classes = useStyles();

    const loadAccounts = () => {
        getAccounts(currentUser.userID)
            .then(val => setAccounts(val))
    }

    useEffect(() => {
        loadAccounts()
    }, [])

    return (
        <>
            <Typography className={classes.AccountSummary} variant="h4">Account Summary</Typography>
            <Table size="small" >
                <TableBody >
                    <AccountList accounts={accounts} />
                </TableBody>
            </Table>
        </>
    )
}
