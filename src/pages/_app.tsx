import theme from '@/config/theme'
import { UserContext } from '@/context/UserContext'
import { User } from '@/type/User'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    username: "default username in context",
    user_id: "default user_id in context"
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </UserContext.Provider>
  )
}
