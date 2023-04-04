import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

type props = {
  avatar?: string,
  displayComponent: JSX.Element,
  children?: JSX.Element
}

export default function ProfileLayout({ ...props }: props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: "2px solid #000000"
      }}>
      <Toolbar>
        {props.avatar &&
          <Avatar sx={{ marginRight: "3vw" }}>{props.avatar}</Avatar>
        }
        <Box sx={{ flexGrow: 1 }}>
          {props.displayComponent}
        </Box>
        {props.children}
      </Toolbar>
    </AppBar>
  )
}