import { Box } from "@mui/material";

type props = {
  children: JSX.Element[]
}

export default function Layout({ ...props }: props) {
  return (
    <Box sx={{ flex: 1 }}>
      {props.children}
    </Box>
  )
}