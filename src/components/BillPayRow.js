import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { formatShortDate } from '../util/util';

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

// formatShortDate(bill.arrivalDate)

export default function BillPayRow({ bill, useSmallFormat }) {

    const classes = useStyles()

    return (
        <TableRow key={bill.id} className={classes.row}>
            <TableCell className={useSmallFormat ? classes.tinycell : ""}>{bill.payee}</TableCell>
            <TableCell className={useSmallFormat ? classes.tinycell : ""}>{bill.fromAccount}</TableCell>
            <TableCell className={useSmallFormat ? classes.tinycell : ""} align="right">{"$" + bill.amount.toLocaleString("en-CA", { minimumFractionDigits: 2 })}</TableCell>
            <TableCell className={useSmallFormat ? classes.tinycell : ""} align="right">{formatShortDate(bill.arrivalDate)}</TableCell>
        </TableRow>
    )
}
