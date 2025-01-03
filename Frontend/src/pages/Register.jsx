import LogoMain from '../assets/MainLogo.svg'

export default function Register() {

	return (
		<div className='bg-green-800 flex justify-center items-start w-screen h-screen'>
			<section className='bg-white flex flex-col justify-start items-center h-full w-8/12'>
				<a
					className='flex m-8 justify-center items-center'
					href="/pandora">
					<img
						className='h-16'
						src={LogoMain}
						alt=""
					/>
				</a>

				<form
					className='flex flex-col justify-start items-center gap-6 h-auto p-4  w-1/2 border rounded-2xl'
					action=""
				>
					<div className='flex flex-col gap-1'>
						<h1 className='text-3xl font-semibold p-4 w-full h-auto text-center font-sans' >Sign Up</h1>
						<p>Already have an account? <a className='font-medium transition hover:text-blue-400 hover:underline' href="/login">Sign In!</a></p>
					</div>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						placeholder='Username'
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="email"
						placeholder='Email'
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="password"
						placeholder='Password'
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						placeholder='Organization'
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						placeholder='Currency'
					/>

					<div
						className='flex justify-center items-center gap-2 p-0'
					>
						<input className='outline-none border-none shadow-none cursor-pointer' type="checkbox" />
						<h1 className='flex gap-1'>Agree to user
							<a className='font-medium transition hover:text-blue-400 hover:underline' href="">Privacy Policy</a>
							and
							<a className='font-medium transition hover:text-blue-400 hover:underline' href="">Terms and Services</a>
						</h1>
					</div>

					<input 
						className='cursor-pointer bg-green-500 text-white font-medium h-8 w-48 m-2 rounded-lg transition-all hover:bg-gray-600 '
						type="submit" 
						value='Register' 
					/>
				</form >
			</section>
		</div>
	)

}