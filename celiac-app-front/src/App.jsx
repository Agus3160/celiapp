import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
