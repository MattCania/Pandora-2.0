import { Link, Navigate } from 'react-router-dom'
import LogoMain from '../assets/MainLogo.svg'

export default function Header() {
	
	return (
		<header className="w-full flex justify-between items-center bg-slate-700 px-2">
			<div className='flex w-1/5 justify-center items-center gap-2' >
				<a className='text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black hover:font-medium' href="/about">About Us</a>
				<a className='text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black hover:font-medium' href="/products">Products</a>
			</div>

				<a className='flex w-1/5 justify-center items-center' href="/pandora">			
					<img src={LogoMain} alt="" />
				</a>

			<div className='flex w-1/5 justify-center items-center gap-2'>
				<a className='text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black hover:font-medium' href='/login'>Sign In</a>
				<a className='text-white text-center cursor-pointer h-full w-full font-medium rounded-lg transition-colors hover:bg-white hover:text-black hover:font-medium' href='/register'>Sign Up</a>
			</div>
		</header>
	)
}