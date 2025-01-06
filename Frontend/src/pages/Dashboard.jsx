import Card from "../components/Card"

export default function Dashboard() {
	return (
		<section className='flex flex-col justify-center items-start w-full h-screen p-4'>

			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>

			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-1/2 flex justify-around items-center rounded-xl p-4 border border-gray-400'>

				{/* Card */}
				<div className='flex h-full m-2 w-1/5 border border-gray-400 shadow-sm shadow-black rounded-xl'>

				</div>
				<div className='flex h-full m-2 w-1/5 border border-gray-400 shadow-sm shadow-black rounded-xl'>

				</div>
				<div className='flex h-full m-2 w-1/5 border border-gray-400 shadow-sm shadow-black rounded-xl'>

				</div>
				<div className='flex h-full m-2 w-1/5 border border-gray-400 shadow-sm shadow-black rounded-xl'>

				</div>

			</div>



		</section>
	)

}