import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Link, makeStyles, Modal, TableCell, Tooltip, Typography } from '@material-ui/core';
import BillPayList from './BillPayList';
import BillPayDialog from './BillPayDialog'
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
    const [open, setOpen] = useState(false)

    const { getBillPayHistory } = useBankAPI()

    useEffect(() => {
        let o = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
        if (o) setPending(JSON.parse(o))
    }, [])

    useEffect(() => {
        if (pending && pending.length > 0) {
            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(pending))
        }
    }, [pending])



    const addPayment = function (bill) {
        // stub for testing only
        if (bill) {

            let newid = 1
            if (pending && pending.length > 0) {
                newid = Math.max.apply(Math, pending.map(o => o.id)) + 1
            }
            bill.id = newid
            const updated = [
                bill,
                ...pending
            ]

            setPending(updated)
        }
        setOpen(false)
    }

    function openDialog() {
        setOpen(true)
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
            <BillPayDialog open={open} addPending={addPayment} />
            <Button onClick={openDialog} variant="contained" color="primary" size="large">Pay a bill</Button>

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
