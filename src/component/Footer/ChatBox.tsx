import theme from "@/config/theme";
import { IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FooterLayout from "./Layout";
import { useState } from "react";

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

export default function ChatBox() {
  const [value, setValue] = useState<string>("")

  return (
    <FooterLayout>
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
    </FooterLayout>
  )
}

