import theme from "@/config/theme";
import { SocketContext } from "@/context/SocketContext";
import useLocalStorage from "@/hook/useLocalStorage";
import { SOCKET_MESSAGE } from "@/type/Constant";
import { ResType } from "@/type/Socket";
import { User } from "@/type/User";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const socket = useContext(SocketContext);
  const [_, setCurrentUser] = useLocalStorage<User>("user_data");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<ResType | null>(null);

  // open port to receive response from backend service
  socket.on("login_response", (res: ResType) => {
    setResponse(res);
    console.log(res.message);
  });

  useEffect(() => {
    if (response && response.userId) {
      if (response.message === SOCKET_MESSAGE.SUCCESS) {
        setCurrentUser({
          username: username,
          userId: response.userId,
          profileImage: response.profileImage ? response.profileImage : "",
        });
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
