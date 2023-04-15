import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import useModal from "@/hook/useModal";
import Dialog from "../common/Dialog";
import withFooter from "@/hoc/Layout/withFooter";
import { SocketContext } from "@/context/SocketContext";

function CreateGroup() {
  const socket = useContext(SocketContext);

  const [newGroupName, setNewGroupName] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const modal = useModal();

  function handleChangeNewGroupName(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    if (event.target.value.length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setNewGroupName(event.target.value);
  }

  function handleCreateGroup() {
    if (newGroupName.length === 0) {
      setIsError(true)
      return
    }
    socket.on("create_group_response", (res: any) => console.log(res.message));
    socket.emit("createGroup", newGroupName);
    modal.onClose();
    setNewGroupName("");
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
        <IconButton
          onClick={() => {
            setNewGroupName("");
            setIsError(false);
            modal.onOpen();
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Dialog
        open={modal.open}
        onClose={modal.onClose}
        header={"create new group"}
        content={
          <TextField
            onChange={handleChangeNewGroupName}
            inputProps={{ maxLength: 20 }}
            helperText={!isError ? `${newGroupName.length}/20` : "group name cannot be blank"}
            error={isError}
            autoFocus
          />
        }
        iconAction={[
          [<CloseIcon />, modal.onClose],
          [<CheckIcon />, handleCreateGroup],
        ]}
      />
    </>
  );
}

export default withFooter(CreateGroup);
