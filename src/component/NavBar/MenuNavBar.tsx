import useModal from "@/hook/useModal";
import { Box, Button, IconButton, MenuItem } from "@mui/material";
import Dialog from "../common/Dialog";
import Menu from "@/component/common/Menu";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import { useContext, useState } from "react";
import { SocketContext } from "@/context/SocketContext";
import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import { ChatType } from "@/type/Chat";

type props = {
  open: boolean;
  onClose: () => void;
  chatId: string;
  type: ChatType;
};

export default function MenuChat({ ...props }: props) {
  const [currentUser, _] = useLocalStorage<User>("user_data");
  const socket = useContext(SocketContext);
  const [image, setImage] = useState<string>(currentUser.profileImage);
  const [previewImage, setPreviewImage] = useState<string>("");

  const modal = useModal();

  function updateBackground() {
    const updateInfo = {
      type: "Group",
      chatId: "64306c56162f6bf308503bd2",
      backgroundImage: "",
    };

    socket.on("update_background_response", (res: any) => console.log(res.message));
    socket.emit("updateBackground", updateInfo);
  }

  function handleImageChange(event: any): void {
    const tempFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(tempFile);
    reader.onload = () => {
      setImage(reader.result as string);
    };
    setPreviewImage(URL.createObjectURL(tempFile));
    event.target.value = null;
  }

  function clearBackgroundImage(): void {
    setImage("");
    setPreviewImage("");
  }

  return (
    <Menu open={props.open} onClose={props.onClose}>
      <MenuItem>
        <Button onClick={modal.onOpen} sx={{ color: "black" }}>
          change background
        </Button>
      </MenuItem>
      <Dialog
        open={modal.open}
        onClose={modal.onClose}
        header={"choose background image"}
        content={
          <Box sx={{ position: "relative", marginRight: "auto", backgroundColor: "grey", borderRadius: "20px" }}>
            <IconButton aria-label="Upload Profile Picture" component="label">
              <input onChange={handleImageChange} hidden accept="image/*" type="file" />
              <CameraAltIcon sx={{
                position: "fixed", left: "50%",
                transform: "translate(-50%, 0)", zIndex: 1
              }} />
              <img src={previewImage || image}
                style={{ width: "100%", minHeight: "300px" }}
              />
            </IconButton>
          </Box>
        }
        iconAction={[
          [<CloseIcon />, () => { clearBackgroundImage(); modal.onClose() }],

          // upload image to socket
          // updateBackground
          [<CheckIcon />, () => { }],
        ]}
      />
    </Menu>
  );
}
