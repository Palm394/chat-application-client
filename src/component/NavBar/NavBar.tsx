import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import useLocalStorage from "@/hook/useLocalStorage";
import { User } from "@/type/User";
import useMenu from "@/hook/useMenu";
import Menu from "@/component/common/Menu";
import { SocketContext } from "@/context/SocketContext";
import { ResType } from "@/type/Socket";
import { DEFAULT_CURRENT_USER, SOCKET_MESSAGE } from "@/type/Constant";
import { useRouter } from "next/router";

type props = {
  avatar?: string;
};

export default function NavBarIndex({ ...props }: props) {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [currentUser, setCurrentUser] = useLocalStorage<User>("user_data");

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(currentUser.username);
  const [isError, setIsError] = useState<boolean>(false);
  const [userData, setUserData] = useLocalStorage<User>("user_data");
  const [image, setImage] = useState<string>(currentUser.profileImage);
  const [previewImage, setPreviewImage] = useState<string>("");

  const menu = useMenu();

  function updateMe() {
    socket.on("update_user_response", (res: ResType) => {
      console.log("Update User Information Status:", res.message);
      //        Change                | Handle/Res
      //   | username | profileImage  | -----------
      // 1 |    yes   |     yes       |     OK
      // 2 |    yes   |     no        |     OK
      // 3 |    no    |     yes       | view from other account not change  
      // 4 |    no    |     no        | OK (Handle by client side)
      if (res.message === SOCKET_MESSAGE.SUCCESS || (res.message === SOCKET_MESSAGE.USERNAME_IN_USE && previewImage)) {
        setUserData({ ...userData, username: newName, profileImage: image });
      } else {
        setIsError(true)
        return
      }
      closeEditMode()
      router.reload()
      return
    });
    socket.emit("updateMe", {
      myUserId: currentUser.userId,
      username: newName,
      profileImage: image,
    });
  }

  // Have 2 things to update
  // 1. username
  // 2. image profile - have image (file) and previewImage (string)
  function changeProfile(): void {
    if (newName.length === 0) {
      setIsError(true);
      return;
    }

    if (userData.username === newName && !previewImage) {
      closeEditMode()
      return;
    }
    updateMe();
  }

  function handleImageChange(event: any): void {
    const tempFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(tempFile);
    reader.onload = () => {
      setImage(reader.result as string);
    };
    setPreviewImage(URL.createObjectURL(tempFile));
    event.target.value = null;
  }

  function onClickLogout() {
    console.log("Logout button is clicked");

    setCurrentUser(DEFAULT_CURRENT_USER);
    router.push("/login");
    return;
  }

  function clearImageProfile(): void {
    setImage("");
    setPreviewImage("");
  }

  function handleChangeNewName(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    if (event.target.value.length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setNewName(event.target.value);
  }

  function openEditMode(): void {
    setNewName(userData.username)
    setIsEditMode(true);
  }

  function closeEditMode(): void {
    setIsError(false);
    // clearImageProfile();
    setImage(userData.profileImage)
    setPreviewImage("")
    setIsEditMode(false);
  }
  return (
    <AppBar
      position="sticky"
      sx={{
        borderBottom: "2px solid #000000",
        height: "80px",
        justifyContent: "center",
      }}
    >
      {image}
      <Toolbar>
        {/* Profile image */}
        {isEditMode ? (
          <Box sx={{ position: "relative", marginRight: "3vw" }}>
            <IconButton
              onClick={clearImageProfile}
              sx={{ position: "absolute", right: "-10px", zIndex: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton aria-label="Upload Profile Picture" component="label">
              <input onChange={handleImageChange} hidden accept="image/*" type="file" />
              <CameraAltIcon sx={{ position: "absolute", left: "25px", zIndex: 1 }} />
              <Avatar src={previewImage || image} sx={{ width: 56, height: 56 }} />
            </IconButton>
          </Box>
        ) : (
          <Avatar src={image} sx={{ width: 56, height: 56, marginRight: "3vw" }} />
        )}
        {/* Nickname */}
        <Box sx={{ flexGrow: 1 }}>
          {isEditMode ? (
            <TextField
              onChange={handleChangeNewName}
              value={newName}
              inputProps={{ maxLength: 20 }}
              helperText={!isError ? `${newName.length}/20` : (newName.length === 0 ? "nickname cannot be blank" : "Username already in use")}
              error={isError}
              autoFocus
              size="small"
              margin="dense"
            />
          ) : (
            <Typography>{userData.username}</Typography>
          )}
        </Box>
        {/* Action Icon */}
        {isEditMode ? (
          <Box>
            <IconButton onClick={closeEditMode}>
              <CloseIcon />
            </IconButton>
            <IconButton onClick={changeProfile}>
              <CheckIcon />
            </IconButton>
          </Box>
        ) : (
          <Box>
            <IconButton onClick={openEditMode}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={menu.handleOpenMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu open={menu.openMenu} onClose={menu.handleCloseMenu}>
              <MenuItem>
                <Button onClick={onClickLogout} sx={{ color: "black" }}>
                  logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
