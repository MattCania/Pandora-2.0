import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Register from './pages/Registration/Register';
import Login from './pages/Login';
import VerifyEmail from './pages/Registration/Verification';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path='/test' element={<VerifyEmail/>}/>
        <Route path="/" element={<Navigate to="/pandora" replace />} />
        <Route path="/pandora" element={<LandingPage />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
