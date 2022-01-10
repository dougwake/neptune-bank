import React from 'react'
import { AppBar, Box, Button, Chip, Container, Toolbar, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import FaceIcon from '@material-ui/icons/Face';
import SidebarMenu from './SidebarMenu';
import { useAuth } from '../contexts/AuthContext';
import { useBankAPI } from '../contexts/BankAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      // backgroundColor: "red",
    },
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: "blue",
    },
  },
  tableCell: {
    width: "90%"
  },
  account: {
    marginTop: "1em"
  },
  balance: {
    float: "right"
  },
  icon: {
    marginRight: "0.25em",
    verticalAlign: "middle"
  },
  logo: {
    marginRight: "0.25em",
    verticalAlign: "middle"
  },
  user: {
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: "pointer"
    }
  },
  button: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    marginRight: "0.25em"
  },
  ToolbarTitle: {
    flexGrow: 1,
    cursor: "pointer"
  },
  // toolbar: theme.mixins.toolbar
}));

export default function Header({ bankName }) {
  const classes = useStyles();

  const { logout } = useAuth();
  const { currentUser } = useBankAPI();

  let navigate = useNavigate();

  function moveToBillPay(event) {
    event.preventDefault();
    navigate("/billpay", { replace: true });
  }

  function moveToHome(event) {
    event.preventDefault();
    navigate("/", { replace: true });
  }

  async function handleLogout() {
    try {
        await logout()
        navigate("/login", { replace: true });

    } catch {
        console.log("Failed to log out")
    }
}

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <AppBar className="header" position='relative'>
      <Container maxWidth="lg">
        <Toolbar className={classes.root}>
          <Box onClick={moveToHome} className={classes.ToolbarTitle}>
            <Typography variant="h6">
              <AccountBalanceOutlinedIcon className={classes.logo} />
              {bankName}
            </Typography>
          </Box>
          {isMobile ? (
            <SidebarMenu />
          ) : (
            <div>
              <Button onClick={moveToBillPay} className={classes.button} color="inherit">Pay Bills</Button>
              <Button onClick={handleLogout} className={classes.button} color="inherit">Sign Off</Button>
              <Chip
                className={classes.user}
                icon={<FaceIcon />}
                label={currentUser.name}
              />
              </div>)}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
