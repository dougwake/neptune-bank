import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BillPayRow from './BillPayRow';

const useStyles = makeStyles((theme) => ({
    acctlist: {
        paddingBottom: "1.5em",
        width: "95%"
    },
    tinycell: {
        fontSize: "0.7em"
    }
}));

export default function BillPayList({ bills }) {

    const classes = useStyles()

    const theme = useTheme();
    const useSmallFormat = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <Grid container>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className={useSmallFormat ? classes.tinycell : ""}>Bill</TableCell>
                        <TableCell className={useSmallFormat ? classes.tinycell : ""}>From Account</TableCell>
                        <TableCell className={useSmallFormat ? classes.tinycell : ""} align="right">Amount</TableCell>
                        <TableCell className={useSmallFormat ? classes.tinycell : ""} align="right">Arrival Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bills.map((bill) => {
                        return <BillPayRow key={bill.id} bill={bill} useSmallFormat={useSmallFormat} />
                    })}
                </TableBody>
            </Table>
        </Grid>
    )
}
