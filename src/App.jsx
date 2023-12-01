import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Transferencia } from './pages/transferencia'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/transferencia' element={<Transferencia />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
