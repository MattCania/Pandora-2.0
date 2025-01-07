import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LogoMain from './../assets/MainLogo.svg'



export default function MainHeader () {

	return (
		<header 
			className='w-screen bg-slate-700 min-h-10 flex justify-between items-center'
		>
			<div 
			className='flex justify-start items-center w-1/6'
			>	
				<a
				className='h-full outline-none py-1 px-4' 
				href="">
					<img src={LogoMain} alt="" />
				</a>
			</div>
			
			<div className='flex justify-between items-center'>
				<input type="search" />
			</div>

			<div className='flex justify-between items-center w-1/6'>
				<h1 className='border-x-gray-500 border-x text-xl text-white px-8 transition-all hover:px-16'>
					hello
				</h1>
				<button className='flex justify-center items-center text-white p-4 mx-4 text-xl font-medium h-8 w-8 rounded-md border border-transparent transition-all hover:border hover:border-gray-500 '>
					<FontAwesomeIcon icon={faBars}/>
				</button>

			</div>

		</header>

	)

}