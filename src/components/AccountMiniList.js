import { Card, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
    acctid: {
        color: "#AAA",
        marginBottom: "0.5em"
    },
    active: {
        backgroundColor: theme.palette.primary.main
    }
}));


export default function AccountMiniList({ accounts, currentID }) {

    let navigate = useNavigate();

    function moveToTransactions(e, id) {
        e.preventDefault();
        navigate(`/transactions/${id}`, { replace: true });
      }


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {accounts.map((account) => (
                    <Grid className={account.id === currentID ? classes.active : ""} item xs>
                        <Paper onClick={(e) => moveToTransactions(e, account.id)} className={classes.paper}>
                            <Typography variant="h5" component="h2">
                                {account.name}
                            </Typography>
                            <Typography className={classes.acctid}>
                                {"(" + account.accountNumber + ")"}
                            </Typography>
                            <Typography className={classes.balance}>
                                {"$" + account.balance.toLocaleString("en-CA", {minimumFractionDigits: 2})}
                            </Typography>
                            <Typography>{account.name === "Visa" ? "\u00A0" : "Available" }</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
