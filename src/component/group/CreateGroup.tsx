import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import useModal from "@/hook/useModal";
import Dialog from "../common/Dialog";
import withFooter from "@/hoc/Layout/withFooter";
import { SocketContext } from "@/context/socket";

function CreateGroup() {
  const socket = useContext(SocketContext);
  const [newGroupName, setNewGroupName] = useState<string>("");
  const modal = useModal();

  function handleCreateGroupChat() {
    socket.emit("group", newGroupName);
    setNewGroupName("");
    modal.onClose();
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ alignContent: "center" }}>Create Group</Typography>
        <IconButton onClick={modal.onOpen}>
          <AddIcon />
        </IconButton>
      </Box>
      <Dialog
        open={modal.open}
        onClose={modal.onClose}
        header={"create new group"}
        content={
          <TextField
            onChange={(e) => {
              setNewGroupName(e.target.value);
            }}
            helperText={`${newGroupName?.length}/20`}
          />
        }
        iconAction={[
          [<CloseIcon />, modal.onClose],
          [<CheckIcon />, handleCreateGroupChat],
        ]}
      />
    </>
  );
}

export default withFooter(CreateGroup);
