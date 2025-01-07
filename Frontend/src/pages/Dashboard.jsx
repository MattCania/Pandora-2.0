import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "../components/Card"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function Dashboard() {
	return (
		<div className="flex flex-col justify-center items-start w-full h-max p-4 gap-2">
			<div className='w-full h-24 flex gap-2 justify-between items-center rounded-xl p-4 border border-gray-400'>
				<div className='flex w-2/6 justify-start items-center gap-2'>
					<FontAwesomeIcon  className="flex justify-center items-center bg-gray-400 rounded-[50%] border p-4" size="xl" icon={faUser}/>
				<h1 className='text-gray-800 font-medium text-3xl'>
					Welcome User
				</h1>
				</div>
			</div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'></div>
			<div className='w-full h-96 flex justify-around items-center rounded-xl p-4 border border-gray-400'>

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