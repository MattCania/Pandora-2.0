import Waves from "../../components/Waves";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section
      className='flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-auto gap-4'
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <Waves />

      <div className='flex flex-col justify-center items-center w-full lg:w-1/3 h-1/2 rounded-2xl bg-white shadow-xl shadow-zinc-950'>
        <h1 className='flex w-full h-16 justify-center items-center text-emerald-950 text-4xl font-medium p-4'>
          Sign In
        </h1>
        <p
          className="flex justify-center items-center w-full h-auto gap-2"
        >
          Create an account?
          <Link 
          className="underline font-medium hover:text-emerald-500 transition-all duration-500"
          to=""
          >
            Sign In
          </Link>
        </p>
        <form
          className='flex flex-col justify-start items-center w-1/2 h-1/2 py-4 '
          action=''
        >
          <label
            className='flex w-full justify-start text-emerald-950 font-medium items-center'
            htmlFor='email'
          >
            Email:
          </label>

          <input
            className='flex w-full h-8 rounded-md outline-0 px-2 border bg-emerald-200 font-medium'
            id='email'
            name='email'
            type='email'
          />

          <label
            className='flex w-full justify-start text-emerald-950 font-medium items-center'
            htmlFor='password'
          >
            Password:
          </label>

          <input
            className='flex w-full h-8 rounded-md outline-0 px-2 border bg-emerald-200 font-medium'
            id='password'
            name='password'
            type='password'
          />

          <input
            className='flex justify-center items-center w-32 h-16 m-8 bg-emerald-900 text-emerald-200 font-medium rounded-md hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-500 cursor-pointer '
            type='submit'
          />
        </form>
        <div className='flex justify-center items-center w-full h-auto rounded-2xl bg-white gap-8'>
        <Link
          className='text-zinc-900 text-3xl hover:text-emerald-600 transition-all duration-500'
          to=''
        >
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link
          className='text-zinc-900 text-3xl hover:text-emerald-600 transition-all duration-500'
          to=''
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      </div>

      
    </section>
  );
}
