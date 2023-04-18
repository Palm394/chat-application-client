import theme from "@/config/theme";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function register() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isInputError, setIsInputError] = useState<boolean[]>([false, false])
  const [usernameErrorMsg, setUsernameErrorMsg] = useState<string>()
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>()

  function onSubmit(): void {
    if (!validateInput()) { return }

    // socket : register should start here!


    // below code set error about "this nickname is already in used"

    // if (already_have_this_username_in_system) {
    //   setIsInputError([isInputError[0], true])
    //   setPasswordErrorMsg("this nickname is already in used")
    // }
  }

  function validateInput(): boolean {
    if (username.length === 0) {
      setIsInputError([true, isInputError[1]])
      setUsernameErrorMsg("nickname cannot be blank")
      return false
    }
    if (password.length === 0 || confirmPassword.length === 0) {
      setIsInputError([isInputError[0], true])
      setPasswordErrorMsg("password and confirmed cannot be blank")
      return false
    }
    if (password !== confirmPassword) {
      setIsInputError([isInputError[0], true])
      setPasswordErrorMsg("password not match")
      return false
    }
    return true
  }
  function clearError() {
    setIsInputError([false, false])
  }

  return (
    <Stack
      sx={{
        margin: "auto",
      }}
      spacing={3}
    >
      <Typography align="center">Sign Up</Typography>
      <Stack sx={{ width: "300px" }} spacing={theme.spacing(2)}>
        <Box sx={{
          backgroundColor: "white",
          border: "1px solid #000000",
          borderRadius: "20px",
          padding: "40px 20px"
        }}>
          <Typography align="center">nickname</Typography>
          <TextField value={username} onChange={(event) => { setUsername(event.target.value); clearError() }}
            error={isInputError[0]}
            fullWidth
            helperText={isInputError[0] && usernameErrorMsg}
          />
          <Typography align="center">password</Typography>
          <TextField value={password} type={"password"} onChange={(event) => { setPassword(event.target.value); clearError() }}
            error={isInputError[1]}
            fullWidth
          />
          <Typography align="center">confirm password</Typography>
          <TextField value={confirmPassword} type={"password"} onChange={(event) => { setConfirmPassword(event.target.value); clearError() }}
            error={isInputError[1]}
            fullWidth
          />
          {isInputError[1] &&
            <Typography color={"error"} sx={{ marginTop: "30px" }} align="center">{passwordErrorMsg}</Typography>
          }
        </Box>

        <Button onClick={onSubmit} variant="contained">
          Sign up
        </Button>
      </Stack>
    </Stack>
  )
}