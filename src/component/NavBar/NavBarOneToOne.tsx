import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function NavBarOneToOne() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar />
          <Typography>nickname</Typography>
          <MoreVertIcon />
        </Toolbar>
      </AppBar>
    </>
  )
}