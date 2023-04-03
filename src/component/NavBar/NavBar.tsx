import { IconButton } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import NavBarLayout from "./NavBarLayout";

export default function NavBar() {
    return (
        <NavBarLayout avatar="n" text={"nickname"}>
            <IconButton>
                <EditIcon />
            </IconButton>
        </NavBarLayout>
    )
}