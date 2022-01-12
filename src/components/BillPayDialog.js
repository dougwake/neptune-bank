import 'date-fns';
import { Button, Dialog, DialogTitle, FormControl, Grid, InputLabel, ListItem, MenuItem, Select, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    box: {
        minWidth: 120,
        maxWidth: 700,
        alignItems: 'center'
    },
    formControl: {
        width: "100%"
    },
    li: {
        width: "95%",
        justifyContent: "center"
    },
    field: {
        width: "100%"
    },
    alert: {
        width: "87%"
    },
    submitButton: {
        width: "80%",
        align: "center",
        marginBottom: "0.75em"
    }
}));

export default function BillPayDialog({ open, addPending }) {
    const classes = useStyles();

    const [arrivalDate, setArrivalDate] = useState(new Date())
    const [payee, setPayee] = useState("")
    const [amount, setAmount] = useState("0.00")
    const [fromAccount, setFromAccount] = useState("Checking")

    const [payeeErrorMessage, setPayeeErrorMessage] = useState("")
    const [amountErrorMessage, setAmountErrorMessage] = useState("")

    function setDefaults() {
        setPayeeErrorMessage("")
        setAmountErrorMessage("")
        setArrivalDate(new Date())
        setPayee("")
        setAmount("0.00")
        setFromAccount("Checking")
    }

    function payTheBill() {

        // check for blank payee or amount
        if (!payee || payee.trim().length === 0){
            setPayeeErrorMessage("Please enter a Payee")
            return
        }

        if (!amount || isNaN(amount) || amount < 0.01){
            setAmountErrorMessage("Please enter a valid amount")
            return
        }

        let bill = {
            id: -1,
            payee,
            fromAccount,
            amount: (Math.round(amount * 100) / 100),
            arrivalDate: Date.parse(arrivalDate)
        }

        setDefaults()

        addPending(bill)
    }

    function onFromAccountChange(e) {
        setFromAccount(e.target.value)
    }

    function onPayeeChange(e) {
        setPayee(e.target.value)
    }

    function onAmountChange(e) {
        if (isNaN(e.target.value)) {
            console.log("bad: " + e.target.value)
            e.preventDefault()
        } else {
            setAmount(e.target.value)
        }
    }

    function coldClose() {
        setDefaults()
        addPending(null)
    }

    return (
        <>
            <Dialog onClose={coldClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Pay a Bill</DialogTitle>
                <Grid container alignContent="center" className={classes.box}>

                    {payeeErrorMessage ? (
                        <ListItem classname={classes.li}>
                            <Alert className={classes.alert} severity="error">{payeeErrorMessage}</Alert>
                        </ListItem>
                    ) : (
                        <></>
                    )}
                    <ListItem className={classes.li}>
                        <TextField className={classes.field} value={payee} onChange={onPayeeChange} id="text-payee" label="Payee" variant="outlined" />
                    </ListItem>

                    <ListItem className={classes.li}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="input-select-account">Account</InputLabel>
                            <Select
                                labelId="select-account-label"
                                id="select-account"
                                value={fromAccount}
                                onChange={onFromAccountChange}
                                label="Account"
                            >
                                <MenuItem value={"Checking"}>Checking</MenuItem>
                                <MenuItem value={"Savings"}>Savings</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>

                    {amountErrorMessage ? (
                        <ListItem classname={classes.li}>
                            <Alert className={classes.alert} severity="error">{amountErrorMessage}</Alert>
                        </ListItem>
                    ) : (
                        <></>
                    )}
                    <ListItem className={classes.li}>
                        <TextField className={classes.field} value={amount} onChange={onAmountChange} id="text-amount" label="Amount" variant="outlined" />
                    </ListItem>

                    <ListItem className={classes.li}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <KeyboardDatePicker
                                    inputVariant="outlined"
                                    className={classes.field}
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Bill Pay Date"
                                    format="yyyy/MM/dd"
                                    value={arrivalDate}
                                    minDate={Date()}
                                    onChange={setArrivalDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </ListItem>

                    <ListItem className={classes.li}>
                        <Button onClick={payTheBill} className={classes.submitButton} variant="contained" color="primary" size="small">Schedule Payment</Button>
                    </ListItem>

                </Grid>
            </Dialog>
        </>
    )
}
