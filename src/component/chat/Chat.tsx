import { Avatar, ListItemButton, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { ChatType } from "@/type/Chat";

type props = {
  href: string,
  label: string,
  type: ChatType
}

export default function Chat({ ...props }: props) {
  return (
    <ListItemButton href={props.href} sx={{ minHeight: "56px", margin: 0 }}>
      {props.type === "1-1" &&
        <Avatar sx={{ marginRight: "3vw" }} />
      }
      <Typography sx={{ flexGrow: 1 }}>{props.label}</Typography>
      <MessageIcon />
    </ListItemButton>
  )
}