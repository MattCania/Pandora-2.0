import LogoMain from '../assets/MainLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Login() {

	return (
		<div className='bg-green-800 flex justify-center items-start w-screen h-screen'>
			<section className='bg-white flex flex-col justify-center items-center h-full w-8/12'>
				<a
					className='flex m-2 justify-center items-center'
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
					<div className='flex flex-col gap-1 p-4'>
						<h1 className='text-3xl font-semibold w-full h-auto text-center font-sans' >Welcome to Pandora!</h1>
						<p className='text-center'>Don't have an account? <a className='font-medium transition hover:text-blue-400 hover:underline' href="/login">Sign Up!</a></p>
					</div>

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
						className='cursor-pointer bg-green-500 text-white font-medium h-8 w-48 m-2 rounded-lg transition-all hover:bg-gray-600 '
						type="submit"
						value='Login'
					/>
				</form >
			</section>
		</div>
	)

}