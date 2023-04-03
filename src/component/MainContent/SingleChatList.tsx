import { Avatar, ListItemButton, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';

type props = {
  href: string,
  label: string,
  type: "Client" | "Group"
}

export default function SingleChatList({ ...props }: props) {
  return (
    <ListItemButton href={props.href} sx={{ minHeight: "56px", margin: 0 }}>
      {props.type === "Client" &&
        <Avatar sx={{ marginRight: "3vw" }} />
      }
      <Typography sx={{ flexGrow: 1 }}>{props.label}</Typography>
      <MessageIcon />
    </ListItemButton>
  )
}