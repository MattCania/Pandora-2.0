import { Routes, Route, Navigate } from 'react-router-dom'
import CaptureHeader from '../../partials/CaptureHeader'
import CapturePage from './CapturePage'

export default function CaptureRouter() {

	return (

		<section
			className='flex flex-col justify-start items-center w-screen h-screen overflow-hidden'
		>
			<CaptureHeader/>

			<div
				className='flex flex-col justify-center items-center w-full h-auto overflow-x-hidden mt-10'
			>
				<Routes>
					<Route path='' element={<CapturePage/>} />
				</Routes>

			</div>

		</section>

	)

}