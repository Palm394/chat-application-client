import theme from "@/config/theme";
import { IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import withFooter from "@/hoc/Layout/withFooter";
import { ChatType } from "@/type/Chat";

const TextField = styled(MuiTextField)({
  '.MuiOutlinedInput-root': {
    '&': {
      borderColor: 'none',
      backgroundColor: theme.palette.background.default,
      borderRadius: '30px'
    },
    '&:hover': {
      borderColor: 'none',
    },
  },
});

type props = {
  chatType: ChatType,
  id: string
}

function ChatBox({ ...props }: props) {
  const [value, setValue] = useState<string>("")

  function sendMessage() {
    console.log(`Send ${props.chatType} message: ${props.id}`)
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
          <IconButton onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        )
      }}
    />
  )
}

export default withFooter(ChatBox)

