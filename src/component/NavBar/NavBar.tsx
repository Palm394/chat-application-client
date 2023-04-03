import { AppBar, Avatar, Toolbar, Typography } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Avatar />
                <Typography>nickname</Typography>
                <EditIcon />
            </Toolbar>
        </AppBar>
    )
}