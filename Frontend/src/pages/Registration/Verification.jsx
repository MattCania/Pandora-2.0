import React, { useState, useEffect } from 'react';
import LogoMain from '../../assets/MainLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

export default function VerifyEmail() {
	const [timeLeft, setTimeLeft] = useState(30); // Initial countdown time in seconds

	useEffect(() => {
	  if (timeLeft <= 0) return; // Stop the timer when it reaches 0
  
	  const timer = setInterval(() => {
		setTimeLeft((prevTime) => prevTime - 1);
	  }, 1000);
  
	  return () => clearInterval(timer); // Clean up the timer on component unmount
	}, [timeLeft]);

	return (
		<div className='bg-green-800 flex justify-center items-start w-screen h-screen'>
			<section className='bg-white flex flex-col justify-center items-center h-full w-8/12'>

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
					className='flex flex-col justify-start items-center gap-1 h-auto p-4 w-1/2 border rounded-2xl'
					action="">
					<h1
						className="text-3xl font-medium p-4"
					>Email Verification</h1>
					<input
						className='flex h-8 w-4/5 rounded-md border appearance-none border-black p-2'
						type="number"
						name="otp"
						id="otp" 
						placeholder='Enter Sent OTP'
						/>
					<div
						className='flex justify-between items-center w-full h-auto '>
						<a href=""></a>
						<button
							disabled={timeLeft !== 0}
							className={
								`flex justify-center items-center text-center w-1/4
								p-1 m-2 border rounded-md transition-all 
								${timeLeft === 0 ? 'bg-gray-700 text-white hover:bg-gray-400 hover:text-black ' 
								: 'bg-transparent text-gray-400'}`}
							type='button'
							onClick={() => setTimeLeft(30)}
						>
							{timeLeft > 0 && timeLeft}
							<FontAwesomeIcon className='m-1' icon={faRefresh}/>
								Resend
						</button>
					</div>
					<input
						className='cursor-pointer bg-green-500 text-white font-medium h-8 w-1/3 rounded-lg transition-all hover:bg-gray-600 '
						type="submit"
						value={'Register'}
					/>
				</form>
			</section>
		</div>

	)


}