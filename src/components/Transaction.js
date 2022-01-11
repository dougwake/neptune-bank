import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: "white",
      },
      '&:nth-of-type(even)': {
        backgroundColor: "#DDD",
      }
    },
    tinycell: {
        fontSize: "0.6em"
    }
}))

export default function Transaction({ transaction, useSmallFormat }) {
    const classes = useStyles();

    function formatAmount(amt) {
        return (amt < 0 ? "-$" : "$") + Math.abs(amt).toLocaleString("en-CA", {minimumFractionDigits: 2})
    }

    function toWithdrawalAmount(amt) {
        return (amt < 0 ? "$" + Math.abs(amt).toLocaleString("en-CA", {minimumFractionDigits: 2}) : "")
    }

    function toDepositAmount(amt) {
        return (amt >= 0 ? "$" + amt.toLocaleString("en-CA", {minimumFractionDigits: 2}) : "")
    }

    return (
        <>
        {useSmallFormat ? (
        <TableRow className={classes.row} key={transaction.id}>
            <TableCell className={classes.tinycell}>{transaction.date}</TableCell>
            <TableCell className={classes.tinycell}>{transaction.description}</TableCell>
            <TableCell className={classes.tinycell} align="right">{formatAmount(transaction.amount)}</TableCell>
            <TableCell className={classes.tinycell} align="right">{formatAmount(transaction.balance)}</TableCell>
        </TableRow>
        ) : (
            <TableRow className={classes.row} key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell align="right">{toWithdrawalAmount(transaction.amount)}</TableCell>
            <TableCell align="right">{toDepositAmount(transaction.amount)}</TableCell>
            <TableCell align="right">{formatAmount(transaction.balance)}</TableCell>
        </TableRow>
        )}
        </>
    )
}
