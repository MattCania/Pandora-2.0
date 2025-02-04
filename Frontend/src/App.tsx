import { Routes, Route, Navigate } from 'react-router-dom'
import { CapturePage, CaptureRouter } from '.'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Navigate to='/pandora'/>} />
        <Route path='/pandora/*' element={<CaptureRouter/>} />

      </Routes>
  )
}

export default App
