import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import useMenu from "@/hook/useMenu";

type props = {
    avatar?: string,
}

export default function NavBarIndex({ ...props }: props) {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)
    const [userData, setUserData] = useLocalStorage<User>("user_data")

    const menu = useMenu()

    function changeUsername(): void {
        if (newName.length === 0) {
            setIsError(true)
            return
        }
        setUserData({ ...userData, username: newName })
        closeEditMode()
    }
    function onClickLogout() {
        console.log("Logout button is clicked")
    }
    function handleChangeNewName(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void {
        if (event.target.value.length === 0) {
            setIsError(true)
        } else {
            setIsError(false)
        }
        setNewName(event.target.value)
    }
    function openEditMode(): void {
        setIsEditMode(true)
    }
    function closeEditMode(): void {
        setNewName("")
        setIsError(false)
        setIsEditMode(false)
    }
    return (
        <AppBar
            position="sticky"
            sx={{
                borderBottom: "2px solid #000000",
                height: "80px",
                justifyContent: "center"
            }}
        >
            <Toolbar>
                <Avatar sx={{ width: 56, height: 56, marginRight: "3vw" }}>{props.avatar}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                    {isEditMode ?
                        <TextField
                            onChange={handleChangeNewName}
                            value={newName}
                            inputProps={{ maxLength: 20 }}
                            helperText={!isError ? `${newName.length}/20` : "nickname cannot be blank"}
                            error={isError}
                            autoFocus
                            size="small"
                            margin="dense"
                        />
                        :
                        <Typography>{userData.username}</Typography>
                    }
                </Box>
                {isEditMode ?
                    <Box>
                        <IconButton onClick={closeEditMode}><CloseIcon /></IconButton>
                        <IconButton onClick={changeUsername}><CheckIcon /></IconButton>
                    </Box>
                    :
                    <Box>
                        <IconButton onClick={openEditMode}><EditIcon /></IconButton>
                        <IconButton onClick={menu.handleOpenMenu}><MoreVertIcon /></IconButton>
                        <Menu open={menu.openMenu} onClose={menu.handleCloseMenu}
                            sx={{ mt: '30px' }}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem>
                                <Button onClick={onClickLogout} sx={{ color: "black" }}>logout</Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                }
            </Toolbar>
        </AppBar>
    )
}