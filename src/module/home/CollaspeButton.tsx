import theme from "@/config/theme";
import { ListItemButton, Typography } from "@mui/material";

type props = {
  name: string,
  amount: number,
  onClick: () => void,
}

export default function CollaspeButton({ ...props }: props) {
  return (
    <ListItemButton sx={{ minHeight: "56px", backgroundColor: theme.palette.primary.main }} onClick={props.onClick}>
      <Typography>{props.name} ({props.amount})</Typography>
    </ListItemButton>
  )
}