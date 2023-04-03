import { IconButton } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBarLayout from "./NavBarLayout";

export default function NavBarGroup() {
  return (
    <NavBarLayout text={"client1"}>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </NavBarLayout>
  )
}