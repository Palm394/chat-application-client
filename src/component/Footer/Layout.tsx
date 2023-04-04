import theme from "@/config/theme";
import { Box } from "@mui/material";

type props = {
  children: JSX.Element
}

export default function FooterLayout({ ...props }: props) {
  return (
    <Box position={"sticky"}
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
        bottom: 0
      }}>
      {props.children}
    </Box>
  )
}