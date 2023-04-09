import { AppBar, Avatar, Box, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

type props = {
    avatar?: string,
}

export default function NavBarIndex({ ...props }: props) {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)

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
                            inputProps={{ maxLength: 20 }}
                            helperText={!isError ? `${newName.length}/20` : "nickname cannot be blank"}
                            error={isError}
                            autoFocus
                            size="small"
                            margin="dense"
                        />
                        :
                        <Typography>Username</Typography>
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