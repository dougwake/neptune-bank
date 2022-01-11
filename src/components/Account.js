import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Link, TableCell, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';



export default function Account({ account }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            marginBottom: "1em",
            [theme.breakpoints.up('sm')]: {
                // backgroundColor: "red",
            },
            [theme.breakpoints.down('sm')]: {
                // backgroundColor: "blue",
            },
        },
        tableCell: {
        },
        accountName: {
            marginBottom: "1em",
            verticalAlign: "bottom",
            '&:hover': {
                color: "red",
                cursor: "pointer"
            }
        },
        balance: {
            float: "right"
        },
        negbalance: {
            float: "right",
            color: "red",
            fontWeight: "bold"
        },
        icon: {
            marginRight: "0.25em"
        }
    }));

    const classes = useStyles();

    const renderAccountIcon = () => {
        if (account.name === "Visa") {
            return <CreditCardIcon className={classes.icon} />;
        } else if (account.name === "Savings") {
            return <LocalAtmIcon className={classes.icon} />;
        } else {
            return <EventNoteOutlinedIcon className={classes.icon} />
        }
    }

    let navigate = useNavigate();

    function moveToTransactions(e, id) {
        e.preventDefault();
        navigate(`/transactions/${id}`, { replace: true });
      }
    

    return (
        <TableCell className={classes.tableCell}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" className={account.balance < 0 ? classes.negbalance : classes.balance}>
                        { (account.balance < 0 ? "-$" : "$") + Math.abs(account.balance).toLocaleString("en-CA", {minimumFractionDigits: 2})}
                    </Typography>
                    <Tooltip title="View Transactions" placement="bottom-start">
                        <Box onClick={(e) => moveToTransactions(e, account.id)} className={classes.accountName}>
                            {renderAccountIcon()}
                            <Typography className={classes.accountName} variant="h5" component="a">
                                {account.name}
                            </Typography>
                        </Box>
                    </Tooltip>
                    <Typography color="textSecondary" variant="body2" component="p">
                        Account Number: {account.accountNumber}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={(e) => moveToTransactions(e, account.id)} variant="contained" color="primary" size="small">
                        View Transactions
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                        Account Details
                    </Button>
                </CardActions>
            </Card>
        </TableCell>
    )
}
