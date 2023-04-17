import useModal from "@/hook/useModal";
import { Button, MenuItem } from "@mui/material";
import Dialog from "../common/Dialog";
import Menu from "@/component/common/Menu";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { SocketContext } from "@/context/SocketContext";

type props = {
  open: boolean;
  onClose: () => void;
};

export default function MenuChat({ ...props }: props) {
  const socket = useContext(SocketContext);

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
        content={<>input image</>}
        iconAction={[
          [<CloseIcon />, modal.onClose],
          [<CheckIcon />, () => {}],
        ]}
      />
    </Menu>
  );
}
