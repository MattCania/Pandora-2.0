import { useState } from 'react'
import LogoMain from '../assets/MainLogo.svg'
import PostData from '../hooks/PostData'

export default function Register() {
	const [formValues, setFormValues] = useState({
		firstname: '',
		middlename: '',
		lastname: '',
		username: '',
		email: '',
		password: '',
		organization: '',
		currency: 'PHP',
	})
	const [isChecked, setIsChecked] = useState(false);

	const handleInputChange = (e) => {
		const { name, value, checked, type } = e.target;
			setFormValues((prevValues) => ({
				...prevValues,
				[name]: value,
			}));
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Submission Process')
		console.log('Submission CheckBox')
		// if (!isChecked) {
		// 	alert('Please Agree to Terms and Policy');
		// 	return;
		// }
		console.log('Submission FormData')
		const formData = { ...formValues }
		
		console.log('Submission Posting Data')
		try {
			console.log('Submission Response Fetching')
			const response = await fetch("/api/register", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
				credentials: "include",
			  })

			console.log('Submission Response Validation')
			if (!response.ok) throw new Error('Register Unsuccessful')
				
			console.log('Successful Registration', response)
			} catch (error) {
			console.log('Submission Response Error')
			console.error(error)
		}
	}

	return (
		<div className='bg-green-800 flex justify-center items-start w-screen h-screen'>
			<section className='bg-white flex flex-col justify-start items-center h-full w-8/12'>
				<a
					className='flex m-4 justify-center items-center'
					href="/pandora">
					<img
						className='h-16'
						src={LogoMain}
						alt=""
					/>
				</a>


				<form
					className='flex flex-col justify-start items-center gap-3 h-auto p-2 w-1/2 border rounded-2xl'
					onSubmit={handleSubmit}
				>
					<div className='flex flex-col gap-1'>
						<h1 className='text-3xl font-semibold p-4 w-full h-auto text-center font-sans' >Sign Up</h1>
						<p>Already have an account? <a className='font-medium transition hover:text-blue-400 hover:underline' href="/login">Sign In!</a></p>
					</div>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='firstname'
						name='firstname'
						placeholder='First Name'
						value={formValues.firstname}
						onChange={handleInputChange}

					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='middlename'
						name='middlename'
						placeholder='Middle Name'
						value={formValues.middlename}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='lastname'
						name='lastname'
						placeholder='Last Name'
						value={formValues.lastname}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='username'
						name='username'
						placeholder='Username'
						value={formValues.username}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="email"
						id='email'
						name='email'
						placeholder='Email'
						value={formValues.email}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="password"
						id='password'
						name='password'
						placeholder='Password'
						value={formValues.password}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='organization'
						name='organization'
						placeholder='Organization'
						value={formValues.organization}
						onChange={handleInputChange}
					/>
					<input
						className='flex h-8 w-4/5 rounded-md border border-black p-2'
						type="text"
						id='currency'
						name='currency'
						placeholder='Currency'
						value={formValues.currency}
						onChange={handleInputChange}
					/>

					<div
						className='flex justify-center items-center gap-2 p-0'
					>
						<input
							className='outline-none border-none shadow-none cursor-pointer'
							type="checkbox"
							id='policy'
							name='policy'
							checked={isChecked}
							onChange={handleInputChange}
						/>
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