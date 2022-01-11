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


    const [pending, setPending] = useState([])
    const [history, setHistory] = useState()

    const { getBillPayHistory } = useBankAPI()

    useEffect(() => {
        let o = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
        if (o) setPending(JSON.parse(o))
    }, [])

    useEffect(() => {
        if (pending && pending.length > 1) {
            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(pending))
        }
    }, [pending])



    const addPayment = function () {
        let newid = 1
        if (pending && pending.length > 0) {
            newid = Math.max.apply(Math, pending.map(o => o.id)) + 1
        }
        const updated = [
            { id: newid, payee: "New Bill", fromAccount: "Checking", amount: 99.99, arrivalDate: new Date("12/18/2021") },
            ...pending
        ]
        setPending(updated)
    }

    const classes = useStyles();

    const loadHistory = () => {
        getBillPayHistory()
            .then(val => setHistory(val))
    }

    useEffect(() => {
        loadHistory()
    }, [])


    return (
        <>
            <Button onClick={addPayment} variant="contained" color="primary" size="large">Pay a bill</Button>

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
