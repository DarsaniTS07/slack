import './App.css'
import Home from './pages/Home'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography:{
      fontFamily:'Nunito Sans',
  },
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
