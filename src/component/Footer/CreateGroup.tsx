import { Box, Dialog, DialogActions, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import FooterLayout from "./Layout";
import { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function CreateGroup() {
  const [newGroupName, setNewGroupName] = useState<string>("")
  const [openNewGroupDialog, setOpenNewGroupDialog] = useState<boolean>(false)

  function onClick(): void {
    setOpenNewGroupDialog(true)
  }
  function onClose(): void {
    setOpenNewGroupDialog(false)
  }

  return (
    <FooterLayout>
      <>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ alignContent: "center" }}>Create Group</Typography>
          <IconButton onClick={onClick}>
            <AddIcon />
          </IconButton>
        </Box>
        <Dialog open={openNewGroupDialog} onClose={onClose}>
          <DialogTitle>create new group</DialogTitle>
          <DialogActions>
            <TextField
              onChange={(e) => { setNewGroupName(e.target.value) }}
              helperText={`${newGroupName?.length}/20`}
            />
            <IconButton>
              <CheckIcon />
            </IconButton>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </DialogActions>
        </Dialog>
      </>
    </FooterLayout>
  )
}