import { Grid, Paper, Typography, makeStyles, Box } from '@material-ui/core'
import React from 'react'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: "center",
        cursor: "pointer"
    },
    balance: {
        fontSize: "14pt",
        color: "#555"
    },
    negbalance: {
        fontSize: "14pt",
        color: "#B22222"
    },
    acctid: {
        color: "#AAA",
        marginBottom: "0.5em"
    },
    active: {
        backgroundColor: theme.palette.primary.main
    },
    modalBox: {
        top: `30%`,
        left: `25%`,
        transform: "translate(-25%, -25%)",
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function AccountDetails({ account }) {
    const classes = useStyles();

    // console.log("AccountDetails: " + account.id)

    return (
        <Grid className={classes.modalBox} item xs>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h2">
                    {account.name}
                </Typography>
                <Typography>Account Number:</Typography>
                <Typography className={classes.acctid}>
                    {account.id}
                </Typography>
                {account.routingNumber ? (
                    <Box>
                        <Typography>Routing Number:</Typography>
                        <Typography className={classes.acctid}>
                            {account.routingNumber}
                        </Typography>
                    </Box>
                ) : (
                    <Box></Box>
                )}
                <Typography className={account.balance < 0 ? classes.negbalance : classes.balance}>
                    {(account.balance < 0 ? "-$" : "$") + Math.abs(account.balance).toLocaleString("en-CA", { minimumFractionDigits: 2 })}
                </Typography>
                <Typography>{account.name === "Visa" ? "\u00A0" : "Available"}</Typography>
            </Paper>
        </Grid>
    )
}
