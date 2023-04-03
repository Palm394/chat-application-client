import { Avatar, ListItemButton, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';

export default function SingleChatList() {

  return (
    <ListItemButton>
      <Avatar sx={{ marginRight: "3vw" }} />
      <Typography sx={{ flexGrow: 1 }}>Client 1</Typography>
      <MessageIcon />
    </ListItemButton>
  )
}