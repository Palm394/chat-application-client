import { Dialog as MuiDialog, DialogTitle, DialogActions, DialogContent, Box, IconButton } from "@mui/material";

type props = {
  open: boolean,
  onClose: () => void,
  header?: string,
  content: JSX.Element,
  iconAction: JSX.Element[]
}

export default function Dialog({ ...props }: props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <MuiDialog open={props.open} onClose={props.onClose}>
        <DialogTitle>{props.header}</DialogTitle>
        <DialogContent>{props.content}</DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          {props.iconAction.map((icon) => {
            return (
              <IconButton>
                {icon}
              </IconButton>
            )
          })}</DialogActions>
      </MuiDialog>
    </Box>
  )
}