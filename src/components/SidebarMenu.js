import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, makeStyles } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import FaceIcon from '@material-ui/icons/Face';
import { useAuth } from '../contexts/AuthContext';
import {useBankAPI} from '../contexts/BankAPI'

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: "#555",
        fontSize: "20px",
    },
    user: {
        width: "90%",
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: "pointer"
        }
    },
    icon: {
        marginRight: "0.5em",
        verticalAlign: "middle"
    }

}));

function SidebarMenu() {

    const { logout } = useAuth();

    const { currentUser } = useBankAPI();


    let navigate = useNavigate();

    async function handleLogout() {
        setOpenDrawer(false)
        try {
            await logout()
            navigate("/login", { replace: true });

        } catch {
            console.log("Failed to log out")
        }
    }

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="right"
            >
                <List>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <Link className={classes.link} to="/"><HomeOutlinedIcon className={classes.icon} />Home</Link>
                    </ListItem>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <Link className={classes.link} to="/billpay"><NoteOutlinedIcon className={classes.icon} />Pay Bills</Link>
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <Link className={classes.link} to="/"><ExitToAppOutlinedIcon className={classes.icon} />Sign Out</Link>
                    </ListItem>
                    <ListItem button onClick={() => setOpenDrawer(false)}>
                        <Link className={classes.link} to="/"><FaceIcon className={classes.icon} />{currentUser.name}</Link>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default SidebarMenu;