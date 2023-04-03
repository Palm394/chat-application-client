import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";

type props = {
  avatar?: string,
  text: string,
  children?: JSX.Element
}

export default function ProfileLayout({ ...props }: props) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {props.avatar &&
          <Avatar sx={{ marginRight: "3vw" }}>{props.avatar}</Avatar>
        }
        <Typography component="div" sx={{ flexGrow: 1 }}>
          {props.text}
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  )
}