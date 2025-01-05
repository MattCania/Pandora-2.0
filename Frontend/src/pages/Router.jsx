
import MainHeader from "../partials/MainHeader"
import MainAside from "../partials/MainAside"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export default function PageRouter () {

	return (
		<div 
			className='flex flex-col w-screen h-screen'
		>
			<MainHeader/>
			<MainAside/>
			<section>
					  <Routes>
						<Route path="dashboard" element={<h1>Dashboard</h1>} />
						<Route path="records" element={<h1>Records</h1>} />
						<Route path="inventory" element={<h1>Inventory</h1>} />
						<Route path="company" element={<h1>Company</h1>} />
						<Route path="analytics" element={<h1>Analytics</h1>} />
						<Route path="banking" element={<h1>Banking</h1>} />
					  </Routes>
			</section>
		</div>
	)
}