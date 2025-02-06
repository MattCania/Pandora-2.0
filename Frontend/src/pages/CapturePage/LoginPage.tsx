export default function LoginPage() {
  return (
    <section
    className='flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-auto'
    style={{
      minHeight: "100vh",
      height: "auto",
    }}
    >

      <div
        
        className='flex flex-col justify-center items-center w-full lg:w-3/4 h-3/4 border'
      >
        <h1
          className="flex w-full h-16 justify-center items-center text-zinc-950 text-4xl font-medium p-12"
        >
          Sign In
        </h1>
      <form 
        className="flex flex-col justify-center items-center w-1/2 h-1/2 "
        action=''
      >
        <label htmlFor='email'>
			Email:
		</label>

        <input
          className="flex w-3/4 border"
          id='email'
          name='email'
          type='email'
        />

        <label htmlFor='password'>
			Password
		</label>

        <input
          id='password'
          name='password'
          type={`password`}
        />
      </form>
      
      </div>
    </section>
  );
}
