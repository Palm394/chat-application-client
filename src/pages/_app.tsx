import theme from "@/config/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { SocketContext, socket } from "@/context/socket";

export default function App({ Component, pageProps }: AppProps) {
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
