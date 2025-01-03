import Header from "../components/Header"

export default function LandingPage() {
	const leftNav = [
		{ items: 'About', links: '/about' },
		{ items: 'Products', links: '/products' }
	]

	const rightNav = [
		{ items: 'Sign In', links: '/login' },
		{ items: 'Sign Up', links: '/register' }
	]

	return (
		<>
			<Header leftNav={leftNav} rightNav={rightNav}/>
			<section className='flex w-auto sm:mx-0 lg:mx-40 min-h-screen h-auto border'>
				<div className='flex p-4'>
					<h1 className='text-3xl font-medium'>Welcome to Pandora!</h1>
					<div>
					</div>
				</div>
			</section>
		</>
	)

}
