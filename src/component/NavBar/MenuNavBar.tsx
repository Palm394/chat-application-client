import useModal from "@/hook/useModal";
import { Menu as MuiMenu, MenuItem, Button } from "@mui/material";
import Dialog from "../common/Dialog";

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

type props = {
  open: boolean,
  onClose: () => void
}

export default function Menu({ ...props }: props) {
  const modal = useModal()

  return (
    <MuiMenu
      open={props.open}
      sx={{ mt: '30px' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={props.onClose}
    >
      <MenuItem>
        <Button onClick={modal.onOpen} sx={{ color: "black" }}>change background</Button>
        <Dialog
          open={modal.open}
          onClose={modal.onClose}
          header={"choose background image"}
          content={
            <>input image</>
          }
          iconAction={[[<CloseIcon />, modal.onClose], [<CheckIcon />, () => { }]]}
        />
      </MenuItem>
    </MuiMenu>
  )
}