import theme from "@/config/theme";
import { socket, SocketContext } from "@/context/SocketContext";
import { User } from "@/type/User";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {

  const default_user: User = {
    username: "",
    user_id: ""
  }
  if (!window.localStorage.getItem("user_data")) {
    window.localStorage.setItem("user_data", JSON.stringify(default_user))
  }

  return (
    <SocketContext.Provider value={socket}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </SocketContext.Provider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});