
export default function Card({ style, title, subTitle, description, linkA, linkB, buttonA, buttonB }) {

	return (
		<div className={style}>
			<h1 className='text-3xl'>{title || 'Sample Title'}</h1>
			

		</div>
	)

}