import theme from "@/config/theme";
import { IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import withFooter from "@/hoc/Layout/withFooter";

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

function ChatBox() {
  const [value, setValue] = useState<string>("")

  return (
    <TextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter message here!"
      fullWidth
      sx={{ borderRadius: 8 }}
      InputProps={{
        endAdornment: value.length > 0 && (
          <IconButton>
            <SendIcon />
          </IconButton>
        )
      }}
    />
  )
}

export default withFooter(ChatBox)

