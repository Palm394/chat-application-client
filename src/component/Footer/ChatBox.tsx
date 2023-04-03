import theme from "@/config/theme";
import { IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FooterLayout from "./Layout";

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
  return (
    <FooterLayout>
      <TextField
        placeholder="Enter message here!"
        fullWidth
        sx={{ borderRadius: 8 }}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SendIcon />
            </IconButton>
          )
        }}
      />
    </FooterLayout>
  )
}

