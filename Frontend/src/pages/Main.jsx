
import MainHeader from "../partials/MainHeader"
import MainAside from "../partials/MainAside"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageRouter from "./PageRouter";


export default function Main() {

	return (
		<div
			className='flex w-screen h-screen'
		>
			<MainAside />
			<section className="flex flex-col justify-between h-full w-full overflow-hidden">
				<MainHeader />
				<section className="flex clex-col min-h-full h-auto w-full overflow-y-auto ">
					<Routes>
						<Route path="*" element={<PageRouter />} />
					</Routes>
				</section>
			</section>
		</div>
	)
}