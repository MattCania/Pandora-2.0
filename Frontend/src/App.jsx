import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainRouter from './MainRouter';

function App() {
  return (
    <Router> 
      <MainRouter/>
    </Router>
  );
}

export default App;
