import Waves from "../../components/Waves";
import RegistrationImg from "../../assets/Registration Image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [showPass, setPass] = useState(false);

  const togglePass = () => {
    setPass (showPass => !showPass)
  }

  return (
    <section
      className='flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-auto gap-4'
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <div
        className="flex p-4 w-3/4 h-5/6 justify-around items-center bg-emerald-800 shadow-zinc-950 shadow-2xl rounded-2xl"
      >
        {/* Temporary lng katamad e HAHHHA */}
        <img 
          className="h-full w-1/2 rounded-2xl"
          src={RegistrationImg} 
          alt=""
        />

      <div className='flex flex-col justify-center items-center w-full lg:w-1/3 h-2/3 py-2 rounded-2xl bg-white shadow-xl shadow-zinc-950'>
        <h1 className='flex w-3/4 h-auto justify-start items-center text-emerald-950 text-4xl font-medium'>
          Sign In
        </h1>
        <p
          className="flex justify-start items-center w-3/4 h-auto gap-2"
        >
          Create an account?
          <Link 
          className="underline font-medium hover:text-emerald-500 transition-all duration-500"
          to=""
          >
            Sign Up
          </Link>
        </p>
        <form
          className='flex flex-col justify-start items-center w-3/4 h-3/4 py-2 '
          action=''
        >
          <label
            className='flex w-full justify-start text-emerald-950 font-medium items-center'
            htmlFor='email'
          >
            Email:
          </label>

          <input
            className='flex w-full h-16 rounded-md outline-0 px-2 border font-medium'
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

          <div
            
            className='flex justify-center items-center w-full h-16 rounded-md outline-0 relative'
          >

          <input
            className='flex w-full h-full rounded-md outline-0 px-2 border font-medium'
            id='password'
            name='password'
            type={showPass ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={togglePass}
              className="absolute right-0 w-6 m-2 text-emerald-950 hover:text-emerald-400 transition-all duration-500 cursor-pointer" 
            >
            <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye}/>

            </button>
            
          </div>

          <div
            className="flex flex-col items-center justify-center w-full h-1/2 mt-4"
          >

          <input
            className='flex justify-center items-center w-full h-24 bg-emerald-900 text-emerald-200 font-medium rounded-md hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-500 cursor-pointer '
            type='submit'
            />
          or
          <Link
            className='flex justify-center items-center gap-2 text-zinc-900 h-24 w-full border border-zinc-700 rounded-md hover:bg-emerald-400 hover:border-emerald-400 hover:text-emerald-50  transition-all duration-500'
            to=''
            >
            Sign in with google
            <FontAwesomeIcon size="xl" icon={faGoogle} />
          </Link>
            </div>
        </form>
      </div>

      </div>
      
    </section>
  );
}
