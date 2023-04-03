import theme from "@/config/theme";
import { Avatar, ListItem, Typography } from "@mui/material";

type props = {
  isMine: boolean,
  avatar?: string,
}

export default function Message({ ...props }: props) {
  return (
    <ListItem sx={{
      flexDirection:
        props.isMine ? "row-reverse" : "initial"
    }}>
      <Avatar sx={{
        margin: props.isMine ? `0 0 0 ${theme.spacing(5)}` : `0 ${theme.spacing(5)} 0 0`
      }} />
      <Typography>test message</Typography>
    </ListItem>
  )
}