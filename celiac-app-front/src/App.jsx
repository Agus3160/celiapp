import NavBar from './components/NavBar'
import Home from './pages/Home'
import Local from './pages/Local'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/local/:localId" element={<Local />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
