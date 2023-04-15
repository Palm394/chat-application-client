import { IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBarLayout from "./NavBarLayout";
import useMenu from "@/hook/useMenu";
import MenuNavBar from "./MenuNavBar";

type props = {
  label?: string
}

NavBarDirect.defaultProps = {
  label: "CHAT NAME",
}

export default function NavBarDirect({ ...props }: props) {
  const menu = useMenu()
  return (
    <NavBarLayout
      avatar="c"
      displayComponent={<Typography>{props.label}</Typography>}>
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