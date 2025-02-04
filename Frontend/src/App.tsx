import { Routes, Route, Navigate } from 'react-router-dom'
import { CapturePage, CaptureRouter } from '.'
import './App.css'

function App() {

  return (
    <section 
      className='flex justify-center items-center w-screen h-screen overflow-hidden'
    >
      <Routes>
        <Route path='/' element={<Navigate to='/pandora'/>} />
        <Route path='/pandora/*' element={<CaptureRouter/>} />

      </Routes>
    </section>
  )
}

export default App
