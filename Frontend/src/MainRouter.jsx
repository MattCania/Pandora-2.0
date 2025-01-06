import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from './pages/Landing';
import Register from './pages/Registration/Register';
import Login from './pages/Login';
import VerifyEmail from './pages/Registration/Verification';
import Dashboard from './pages/Dashboard';
import PageRouter from './pages/Router';
import Main from './pages/Main';

export default function MainRouter() {


	return (
		<Routes>
			<Route path='/test' element={<Dashboard />} />
			<Route path="/" element={<Navigate to="/pandora" replace />} />
			<Route path="/pandora" element={<LandingPage />} />
			<Route path='/home/*' element={<Main />} />
			<Route path='/register' element={<Register />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}