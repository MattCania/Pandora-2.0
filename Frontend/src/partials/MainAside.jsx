import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faHouse, faFolderOpen, faBox, faChartLine, faBuilding, faBank } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom";

export default function MainAside() {
	const [isOpen, setOpen] = useState(true)


	const navigation = [
		{
			button: isOpen ? 'Dashboard' : <FontAwesomeIcon icon={faHouse} />, link: '/dashboard'
		},
		{
			button: isOpen ? 'Records' : <FontAwesomeIcon icon={faFolderOpen} />, link: '/records'
		},
		{
			button: isOpen ? 'Inventory' : <FontAwesomeIcon icon={faBox} />, link: '/inventory'
		},

		{
			button: isOpen ? 'Company' : <FontAwesomeIcon icon={faBuilding} />, link: '/company'
		},
		{
			button: isOpen ? 'Analytics' : <FontAwesomeIcon icon={faChartLine} />, link: '/banking'
		},
		{
			button: isOpen ? 'Banking' : <FontAwesomeIcon icon={faBank} />, link: '/analytics'
		},


	]


	return (
		<aside className={`flex flex-col justify-between gap-2 py-8 ${isOpen ? 'w-1/6 p-2' : 'w-12 p-1'}  h-full border bg-slate-200 transition-all`} >
			<div className='flex flex-col gap-4' >
				{navigation.map((item, index) => (

					<NavLink
						key={index}
						to={`/home${item.link}`}
						className={({ isActive }) => `flex ${isOpen ? 'justify-start' : 'justify-center'} items-center h-10 p-2 rounded-lg ${isActive ? 'bg-gray-400 text-black' : 'bg-gray-800 text-white'} transition-all font-medium hover:bg-gray-400 hover:text-black`}
					>
						{item.button}
					</NavLink>


				))}
			</div>

			<button
				className='flex justify-center items-center h-10 p-2 rounded-lg bg-gray-800 text-white font-medium transition-all hover:bg-gray-400 hover:text-black'
				onClick={() => { setOpen(isOpen => !isOpen) }}
			>
				<FontAwesomeIcon icon={isOpen ? faAngleLeft : faAngleRight} />
			</button>
		</aside>
	)


}