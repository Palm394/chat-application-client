import theme from "@/config/theme";
import { socket, SocketContext } from "@/context/SocketContext";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { setCookie, hasCookie } from 'cookies-next';
import dynamic from 'next/dynamic'

function App({ Component, pageProps }: AppProps) {
  if (!hasCookie("username")) {
    setCookie("username", "default_username")
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