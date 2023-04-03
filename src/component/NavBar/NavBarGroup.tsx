import { AppBar, Toolbar, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function NavBarGroup() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>nickname</Typography>
        <MoreVertIcon />
      </Toolbar>
    </AppBar>
  )
}