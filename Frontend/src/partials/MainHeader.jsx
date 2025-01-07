import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'
import { useEffect, useState } from 'react'


export default function MainHeader () {
	const [menuOpen, setMenu] = useState(false)

	const toggleMenu = () => {
		setMenu (menuOpen => !menuOpen)
	}



	return (
		<header className='w-full bg-slate-700 min-h-12 flex justify-between items-center' >
			<div className='flex gap-2 justify-start items-center px-4 w-1/2'>
				<h1 className='text-md font-medium text-white' >
					Search:
				</h1>
				<input 
				className='rounded-md border-none placeholder:italic outline-none px-2 h-8 min-w-72 w-auto'
				type="search" placeholder='Pandora Invoice' />
			</div>

			<div className='flex justify-end items-center w-1/2' >
				<h1 className='w-fit border-x-gray-500 border-x text-md text-white px-8 transition-all hover:px-16'>
					Matt Organization
				</h1>
				<button 
				className='flex justify-center items-center text-white p-4 mx-4 text-xl font-medium h-8 w-8 rounded-md border border-transparent transition-all hover:border hover:border-gray-500 '
				onClick={toggleMenu}
	
				>
					<FontAwesomeIcon icon={faBars}/>
				</button>
			</div>

			{ menuOpen &&
				<Menu/>
			}
		</header>

	)

}