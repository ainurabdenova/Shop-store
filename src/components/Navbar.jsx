import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../utils/getAvatarString";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { removeUser } from "../store/slice/auth";

export function Navbar({ title, rightContent, ...rest }) {
    const { currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" {...rest}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <div>
                    {rightContent}
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >


                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="LogOut">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar size="small" {...stringAvatar(currentUser.email)} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem key={"logout"} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={() => dispatch(removeUser())}>LogOut</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}