import { Button, Card, Container, TextField, Typography } from '@material-ui/core';
import React, { Fragment, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function Login() {

    const refUsername = useRef();
    const refPassword = useRef();
    const [ready, setReady] = useState(false);

    const checkState = function () {
        setReady(refUsername.current.value.length > 0 &&
            refPassword.current.value.length > 0)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: theme.breakpoints.values["sm"],
            // backgroundColor: "#CCC",
            width: "85%",
            textAlign: "center"

        },
        login: {
            marginTop: "0.5em",
            marginBottom: "0.75em",
            textAlign: "center"
        },
        textbox: {
            width: "90%",
            marginBottom: "1em"
        },
        loginbutton: {
            width: "90%",
            marginBottom: "1em",
            backgroundColor:theme.palette.primary.light,
            '&:hover': {
                backgroundColor:theme.palette.primary.main
            }
        }
    }));

    const classes = useStyles();

    return (
        <Fragment>
            <Container className={classes.root}>
                <Card variant="outlined">
                    <Typography className={classes.login} variant="h4">Please Log In</Typography>
                    <TextField onChange={checkState} inputRef={refUsername} className={classes.textbox} id="username" label="Username" variant="outlined" />
                    <TextField onChange={checkState} inputRef={refPassword} className={classes.textbox} type="password" id="password" label="Password" variant="outlined" />
                    <Button disabled={!ready} className={classes.loginbutton} variant="contained">Log In</Button>
                </Card>
            </Container>
        </Fragment>
    )
}
