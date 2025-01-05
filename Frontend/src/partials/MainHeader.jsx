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
			
			<div>

			</div>

			<div>

			</div>

		</header>

	)

}