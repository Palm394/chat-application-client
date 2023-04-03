import { List as MuiList } from "@mui/material";

type props = {
  children: JSX.Element[]
}

export default function List({ ...props }: props) {
  return (
    <MuiList disablePadding>
      {props.children}
    </MuiList>
  )
}