import { IconButton, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBarLayout from "./NavBarLayout";
import useMenu from "@/hook/useMenu";
import MenuNavBar from "./MenuNavBar";

type props = {
  label?: string
}

NavBarGroup.defaultProps = {
  label: "CHAT GROUP NAME",
}

export default function NavBarGroup({ ...props }: props) {
  const menu = useMenu()
  return (
    <NavBarLayout
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