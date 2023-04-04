import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBarLayout from "./NavBarLayout";
import useMenu from "@/hook/useMenu";
import MenuNavBar from "./MenuNavBar";

export default function NavBarOneToOne() {
  const menu = useMenu()
  return (
    <NavBarLayout avatar="c" text={"client1"}>
      <>
        <IconButton onClick={menu.handleOpenMenu}>
          <MoreVertIcon />
        </IconButton>
        <MenuNavBar
          open={menu.openMenu}
          onClose={menu.handleCloseMenu}
        />
      </>
    </NavBarLayout>
  )
}