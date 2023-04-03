import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBarLayout from "./NavBarLayout";

export default function NavBarOneToOne() {
  return (
    <NavBarLayout avatar="c" text={"client1"}>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </NavBarLayout>
  )
}