
import MainHeader from "../partials/MainHeader"
import MainAside from "../partials/MainAside"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageRouter from "./Router";


export default function Main() {

	return (
		<div
			className='flex flex-col w-screen h-screen'
		>
			<MainHeader />
			<section className="flex justify-between h-full">
				<MainAside />
				<Routes>
					<Route path="*" element={<PageRouter />} />
				</Routes>
			</section>
		</div>
	)
}