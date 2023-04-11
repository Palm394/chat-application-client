import theme from "@/config/theme";
import { SocketContext } from "@/context/SocketContext";
import { UserContext } from "@/context/UserContext";
import { SOCKET_MESSAGE } from "@/type/Constant";
import { LoginResType } from "@/type/Socket";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const userContext = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<LoginResType | null>(null);

  // open port to receive response from backend service
  socket.on("login_response", (res: LoginResType) => {
    setResponse(res);
    console.log(res.message);
  });

  useEffect(() => {
    if (userContext && response && response.userId) {
      if (response.message === SOCKET_MESSAGE.SUCCESS) {
        userContext.setUser({ username: username, user_id: response.userId });
        socket.off("login_response");
        router.push("/");
        return;
      }
    }
  }, [socket, response]);

  function onSubmit(): void {
    socket.emit("login", { username: username, password: password });
    return;
  }

  return (
    <>
      <Typography>Login</Typography>
      <Stack sx={{ width: "300px" }} spacing={theme.spacing(2)}>
        <Typography>Username</Typography>
        <TextField value={username} onChange={(event) => setUsername(event.target.value)} />
        <Typography>Password</Typography>
        <TextField value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button onClick={onSubmit} variant="contained">
          Login
        </Button>
      </Stack>
    </>
  );
}
