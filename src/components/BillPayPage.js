import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Link, makeStyles, Modal, TableCell, Tooltip, Typography } from '@material-ui/core';
import BillPayList from './BillPayList';
import { useBankAPI } from '../contexts/BankAPI';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingTop: "1em"
    },
    msg: {
        fontStyle: "italic",
        paddingTop: "1em"
    }
}));

export default function BillPayPage() {


    const [pending, setPending] = useState()
    const [history, setHistory] = useState()

    const { getBillPayPending, getBillPayHistory } = useBankAPI()


    const classes = useStyles();

    const loadPending = () => {
        getBillPayPending()
            .then(val => setPending(val))
    }
    const loadHistory = () => {
        getBillPayHistory()
            .then(val => setHistory(val))
    }

    useEffect(() => {
        loadPending()
    }, [pending])

    useEffect(() => {
        loadHistory()
    }, [])

    // if (id !== currentAccountID) {
    //     setCurrentAccountID(id)
    // }


    return (
        <>
            <Button variant="contained" color="primary" size="large">Pay a bill</Button>

            <Typography className={classes.title} variant="h5">Pending</Typography>
            {pending && pending.length > 0 ? (
                <>
                    <BillPayList bills={pending} />
                </>
            ) : (
                <>
                <Typography className={classes.msg}>None</Typography>
                </>
            )}

            {history && history.length > 0 ? (
                <>
                    <Typography className={classes.title} variant="h5">History</Typography>
                    <BillPayList bills={history} />
                </>
            ) : (
                <></>
            )}
        </>
    )
}
