import Card from "../components/Card"

export default function Dashboard() {
	return (
		<div className="flex flex-col justify-center items-start w-full min-h-max p-4 gap-2">
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



		</div>
	)

}