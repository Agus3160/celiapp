import NavBar from './components/NavBar'
import Home from './pages/Home'
import Local from './pages/Local'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <div className='sm:w-1/2 sm:m-auto mx-2'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local/:localId" element={<Local />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
