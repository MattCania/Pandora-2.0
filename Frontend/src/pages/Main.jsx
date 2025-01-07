
import MainHeader from "../partials/MainHeader"
import MainAside from "../partials/MainAside"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageRouter from "./PageRouter";


export default function Main() {

	return (
		<div
			className='flex flex-col w-screen h-screen'
		>
			<MainHeader />
			<section className="flex justify-between h-full	w-full overflow-x-hidden">
				<MainAside />
				<section className="flex min-h-full h-auto w-5/6 overflow-y-auto ">
					<Routes>
						<Route path="*" element={<PageRouter />} />
					</Routes>
				</section>
			</section>
		</div>
	)
}