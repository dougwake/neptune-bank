import React from 'react'
import { Box, Button, Card, CardActions, CardContent, TableCell, Tooltip, Typography } from '@material-ui/core';
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

    return (
        <TableCell className={classes.tableCell}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" className={classes.balance}>
                        ${account.balance.toLocaleString("en-CA")}
                    </Typography>
                    <Tooltip title="View Transactions" placement="bottom-start">
                        <Box className={classes.accountName}>
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
                    <Button variant="contained" color="primary" size="small">
                        Account Details
                    </Button>
                </CardActions>
            </Card>
        </TableCell>
    )
}
