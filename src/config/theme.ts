import { Shadows, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#D9D9D9",
        },
        secondary: {
            main:"#2FCC59"
        },
        background: {
            default: '#E9E9EB',
        },
    },
    shadows: Array(25).fill('none') as Shadows
})

export default theme