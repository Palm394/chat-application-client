import theme from "@/config/theme";
import { Box, IconButton, TextField as MuiTextField, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

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
    <Box
      sx={{
        height: "100px",
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(5)
      }}
    >
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
    </Box>
  )
}

