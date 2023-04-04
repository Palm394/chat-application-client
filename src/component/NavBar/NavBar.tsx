import { Box, IconButton, TextField, Typography } from "@mui/material"

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import NavBarLayout from "./NavBarLayout";
import { useState } from "react";

export default function NavBar() {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>("")
    function openEditMode(): void {
        setIsEditMode(true)
    }
    function closeEditMode(): void {
        setIsEditMode(false)
    }

    return (
        <NavBarLayout avatar="n"
            displayComponent={
                isEditMode ?
                    <TextField
                        helperText={`${newName.length}/20`}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    :
                    <Typography>{"client1"}</Typography>
            }>
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
        </NavBarLayout>
    )
}