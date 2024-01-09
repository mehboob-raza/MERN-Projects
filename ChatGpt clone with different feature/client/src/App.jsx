import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import Summary from './pages/Summary'
import Paragraph from './pages/Paragraph'
import ChatBot from './pages/Chatbot'
import JsConverter from './pages/JsConverter'
import ScifiImage from './pages/ScifiImage'

export const apiPort = 'http://localhost:8080'
export const openApi = 'https://api.openai.com/v1/chat/completions'
function App() {

  const theme = useMemo(() => createTheme(themeSettings(), []))
  return (
    <>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/paragraph' element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
