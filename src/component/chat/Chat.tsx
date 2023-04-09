import { Avatar, ListItemButton, Typography } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import { ChatType } from "@/type/Chat";
import Link from "next/link";

type props = {
  href: string,
  label: string,
  type: ChatType
}

export default function Chat({ ...props }: props) {
  return (
    <Link style={{ textDecoration: "none", color: "black" }} href={props.href}>
      <ListItemButton sx={{ minHeight: "56px", margin: 0 }}>
        {props.type === "Direct" &&
          <Avatar sx={{ marginRight: "3vw" }} />
        }
        <Typography sx={{ flexGrow: 1 }}>{props.label}</Typography>
        <MessageIcon />
      </ListItemButton>
    </Link>
  )
}