import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Link} from "react-router-dom";

 function UpperMenu() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{background: 'linear-gradient(black, grey)'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
                <Box sx={{flexGrow: 1}}>
                    <Box justifyContent="center"
                         sx={{
                             width: '100%', height: '35px',
                             background: '#fafafa',
                             display: 'flex', gap: '50px'
                         }}>
                        <Link to='/' style={{textDecoration: 'none', color: '#2C2B2BFF',}}>HOME</Link>
                        <Link to='/tic-tac-toe' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>Tic-Tac-Toe</Link>
                        <Link to='/expense-tracker' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>Expense Tracker</Link>
                        <Link to='/game3' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>GAME3</Link>
                        <Link to='/game4' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>GAME4</Link>
                        <Link to='/books' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>BOOKS</Link>
                        <Link to='/store' style={{textDecoration: 'none', color: '#2C2B2BFF', marginLeft: 20}}>STORE</Link>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}
export default UpperMenu;