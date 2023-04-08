import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

type props = {
    avatar?: string,
    displayComponent: JSX.Element,
    children?: JSX.Element
}

export default function NavBarIndex({ ...props }: props) {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>("")
    function openEditMode(): void {
        setIsEditMode(true)
    }
    function closeEditMode(): void {
        setIsEditMode(false)
    }
    return (
        <AppBar
            position="sticky"
            sx={{
                borderBottom: "2px solid #000000"
            }}
        >
            <Toolbar>
                <Avatar sx={{ marginRight: "3vw" }}>{props.avatar}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                    {isEditMode ?
                        <TextField
                            onChange={e => setNewName(e.target.value)}
                            helperText={`${newName.length}/20`}
                            autoFocus
                        />
                        :
                        <Typography> Username</Typography>
                    }
                </Box>
                {isEditMode ?
                    <Box>
                        <IconButton onClick={closeEditMode}><CloseIcon /></IconButton>
                        <IconButton><CheckIcon /></IconButton>
                    </Box>
                    :
                    <IconButton onClick={openEditMode}>
                        <EditIcon />
                    </IconButton>
                }
            </Toolbar>
        </AppBar>
    )
}