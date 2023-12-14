import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Transferencia } from './pages/transferencia'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Navbar } from "./components/Navbar"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import Main from "./pages/Main"
import Movimientos from "./pages/Movimientos"

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/transferencia' element={<Transferencia />} />
            <Route path='/movimientos' element={<Movimientos />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
