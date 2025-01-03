import { Link, Navigate } from 'react-router-dom'
import LogoMain from '../assets/MainLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header({ logo, leftNav, middleNav, rightNav }) {

	return (
		<header className="w-full flex justify-between items-center bg-slate-700 px-2">

			<div className='flex w-1/5 justify-center items-center gap-2' >
				{leftNav.map((item, index) => (
					<a
						key={index}
						className="text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black"
						href={item.links}
					>
						{item.items}
					</a>
				))}
			</div>

			<a
				className='md:flex w-1/5 justify-center items-center'
				href="/pandora"
			>
				<img src={LogoMain} alt="" />
			</a>

			<div
				className='flex w-1/5 justify-center items-center gap-2'
			>

				{rightNav.map((item, index) => (
					<a
						key={index}
						className="text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black"
						href={item.links}
					>
						{item.items}
					</a>
				))}
			</div>


		</header>
	)
}