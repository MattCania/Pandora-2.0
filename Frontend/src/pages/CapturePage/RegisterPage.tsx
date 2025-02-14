import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPass, setPass] = useState(false);

  const togglePass = () => {
    setPass((showPass) => !showPass);
  };

  return (
    <section
      className='flex flex-col justify-center items-center w-full overflow-x-hidden overflow-y-auto gap-4'
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <div className='flex p-4 w-3/4 h-5/6 justify-around items-center bg-emerald-800 shadow-zinc-950 shadow-2xl rounded-2xl'>
        {/* Temporary lng katamad e HAHHHA */}
        {/* <img 
			className="h-full w-1/2 rounded-2xl"
			src={RegistrationImg} 
			alt=""
		  /> */}

        <div className='flex flex-col justify-center items-center w-full lg:w-full h-full py-2 rounded-2xl bg-white shadow-xl shadow-zinc-950'>
          <h1 className='flex w-3/4 h-auto justify-start items-center text-emerald-950 text-4xl font-medium'>
            Sign Up
          </h1>
          <p className='flex justify-start items-center w-3/4 h-auto gap-2'>
            Already have an account?
            <Link
              className='underline font-medium hover:text-emerald-500 transition-all duration-500'
              to='/pandora/login'
            >
              Sign In
            </Link>
          </p>
          <form
            className='flex flex-row justify-start items-center w-full h-3/4 py-2 '
            action=''
          >
            <div className='flex flex-col justify-center items-center w-1/2'>
              <label
                className='flex w-full justify-start text-emerald-950 font-medium items-center'
                htmlFor='name'
              >
                Name:
              </label>

              <input
                className='flex w-full h-16 rounded-md outline-0 px-2 border font-medium'
                id='name'
                name='name'
                type='text'
              />

              <label
                className='flex w-full justify-start text-emerald-950 font-medium items-center'
                htmlFor='organization'
              >
                Organization:
              </label>

              <input
                className='flex w-full h-16 rounded-md outline-0 px-2 border font-medium'
                id='organization'
                name='text'
                type='text'
              />

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

              <div className='flex justify-center items-center w-full h-20 rounded-md outline-0 relative'>
                <input
                  className='flex w-full h-full rounded-md outline-0 px-2 border font-medium'
                  id='password'
                  name='password'
                  type={showPass ? "text" : "password"}
                />
                <button
                  type='button'
                  onClick={togglePass}
                  className='absolute right-0 w-6 m-2 text-emerald-950 hover:text-emerald-400 transition-all duration-500 cursor-pointer'
                >
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </button>
              </div>
              <label
                className='flex w-full justify-start text-emerald-950 font-medium items-center'
                htmlFor='password'
              >
                Confirm Password:
              </label>

              <div className='flex justify-center items-center w-full h-20 rounded-md outline-0 relative'>
                <input
                  className='flex w-full h-full rounded-md outline-0 px-2 border font-medium'
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showPass ? "text" : "password"}
                />
                <button
                  type='button'
                  onClick={togglePass}
                  className='absolute right-0 w-6 m-2 text-emerald-950 hover:text-emerald-400 transition-all duration-500 cursor-pointer'
                >
                  <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-1/2'>
              <div className='flex flex-col items-center justify-center w-full h-1/3 mt-4'>
                <input
                  className='flex justify-center items-center w-full h-24 bg-emerald-900 text-emerald-200 font-medium rounded-md hover:bg-emerald-400 hover:text-emerald-950 transition-all duration-500 cursor-pointer '
                  type='submit'
                />
                or
                <Link
                  className='flex justify-center items-center gap-2 text-zinc-900 h-24 w-full border border-zinc-700 rounded-md hover:bg-emerald-400 hover:border-emerald-400 hover:text-emerald-50  transition-all duration-500'
                  to=''
                >
                  Sign up with google
                  <FontAwesomeIcon
                    size='xl'
                    icon={faGoogle}
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
