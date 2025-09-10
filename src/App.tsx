import CreateRoutes from './app/routes/CreateRoutes.tsx'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './modules/Auth'
import { createTheme, ThemeProvider } from '@mui/material'

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()

  const theme = createTheme({
    typography: {
      allVariants: {
        letterSpacing: '1px',
      },
    },
  })

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      dispatch(authActions.setAccessToken(token))
    }
    setLoading(false)
  }, [])

  return (
    !loading && (
      <>
        <ThemeProvider theme={theme}>
          <CreateRoutes />
          <ToastContainer />
        </ThemeProvider>
      </>
    )
  )
}

export default App
