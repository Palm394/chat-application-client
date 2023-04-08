import theme from "@/config/theme";
import { IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import withFooter from "@/hoc/Layout/withFooter";
import { SocketContext } from "@/context/socket";

const TextField = styled(MuiTextField)({
  ".MuiOutlinedInput-root": {
    "&": {
      borderColor: "none",
      backgroundColor: theme.palette.background.default,
      borderRadius: "30px",
    },
    "&:hover": {
      borderColor: "none",
    },
  },
});

type props = {
  chatId: string;
};

function ChatBox(props: props) {
  const socket = useContext(SocketContext);

  const [value, setValue] = useState<string>("");

  function handleSendMessage() {
    const message_identifier = { chatId: props.chatId, message: value };
    socket.emit("message", message_identifier);
    setValue("");
  }

  return (
    <TextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter message here!"
      fullWidth
      sx={{ borderRadius: 8 }}
      InputProps={{
        endAdornment: value.length > 0 && (
          <IconButton onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        ),
      }}
    />
  );
}

export default withFooter(ChatBox);
