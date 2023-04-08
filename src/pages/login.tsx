import theme from "@/config/theme"
import { Button, Stack, TextField, Typography } from "@mui/material"

export default function Login() {
  function onSubmit(): void {

  }

  return (
    <>
      <Typography>Login</Typography>
      <Stack sx={{ width: "300px" }} spacing={theme.spacing(2)}>
        <Typography>Username</Typography>
        <TextField />
        <Typography>Password</Typography>
        <TextField />
        <Button onClick={onSubmit} variant="contained">Login</Button>
      </Stack>
    </>
  )
}