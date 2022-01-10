import { Button, Card, Container, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { Fragment, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../contexts/AuthContext'

export default function Login() {

    const refUsername = useRef();
    const refPassword = useRef();
    const { authUser, login, logout } = useAuth()
    let navigate = useNavigate();

    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        doLogin();
    }

    async function doLogin() {

        try {
            setError('')
            setLoading(true)
            await login(refUsername.current.value, refPassword.current.value)
            setLoading(false)
            navigate("/", { replace: true });
        }
        catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }

    async function handleLogout() {
        // setError('')

        try {
            await logout()
            navigate("/login", { replace: true });

        } catch {
            console.log("Failed to log out")
        }
    }

    const onPasswordKeyUp = function (e) {
        if (e.keyCode === 13 && refUsername.current.value.length > 0 &&
            refPassword.current.value.length > 0) doLogin()
    }

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
        button: {
            width: "90%",
            marginBottom: "1em",
            marginTop: "1em",
            backgroundColor: theme.palette.primary.light,
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        }
    }));

    const classes = useStyles();

    return (
        <Fragment>
            <Container className={classes.root}>
                <Card variant="outlined">
                    {!authUser && <>
                        <Typography className={classes.login} variant="h4">Please Log In</Typography>
                        <TextField onChange={checkState} inputRef={refUsername} className={classes.textbox} id="username" label="Username" variant="outlined" />
                        <TextField onKeyUp={onPasswordKeyUp} onChange={checkState} inputRef={refPassword} className={classes.textbox} type="password" id="password" label="Password" variant="outlined" />
                        {error && <Alert severity="error">{error}</Alert>}
                        <Button onClick={handleSubmit} disabled={!ready || loading} className={classes.button} variant="contained">Log In</Button>
                    </>}
                    {authUser &&
                        <>
                            <Typography className={classes.login}>You are already logged in</Typography>
                            <Button onClick={handleLogout} className={classes.button} variant="contained">Log Out</Button>
                        </>}
                </Card>
            </Container>
        </Fragment>
    )
}
