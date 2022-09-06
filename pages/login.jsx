import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaFacebook, FaLinkedIn, FaGoogle, FaYoutube, FaTelegram, FaRegEnvelope} from "react-icons/fa";
import {MdLockOutline}from "react-icons/md"

const login = () => {
  return (
    <div>
       <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Demak Ventures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
         
         
          {/* sign in section */}
            <div className="w-3/5 p-5 ">
              <div className="text-left font-bold">
                <span className=' bg-orange-700 text-white rounded px-2 py-1'>Demak</span> <span className=' text-orange-700'>Ventures</span>
              </div>
              <div className="py-10 justify-center">
                <h2 className='text-3xl font-bold text-orange-700 mb-2 '>Sign in to Account</h2>
                <div className="border-2 w-10 border-orange-700 inline-block mb-2"></div>
             <div className="flex justify-center my-2">
              <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaFacebook className="text-sm" />
              </a>
              <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaGoogle className="text-sm" />
              </a>
              <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaYoutube className="text-sm" />
              </a>
              <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                <FaTelegram className="text-sm" />
              </a>
             
             </div>
             


             {/*Social Login Section  */}
              <p className='text-gray-400 my-3'>or use your email account</p>
             <div className="flex flex-col items-center mb-3">
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <FaRegEnvelope className='text-gray-500 m-2'/>
                <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className='text-gray-500 m-2'/>
                <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
             </div>



              <div className="flex w-64 mb-5">
                <label htmlFor="" className='flex items-center text-xs' >
                  <input type="checkbox" name="remember" />
                    Remember me
                </label>
                <a href='#' className='text-xs'>Forgot Password</a>
                <a href='#' className='border-2 border-orange-700 text-orange-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-orange-700 hover:text-white '>
              Sign In</a>
              </div>


              </div>
              
            </div>



            {/* sign up section */}
            <div className="w-2/5 bg-orange-800 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className='text-3xl font-bold mb-2'>Hello User</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className='mb-10'>Please fill in the required filled and get started</p>
            <a href='#' className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-700 '>
              Sign Up</a>
            </div>
        </div>
      </main>


    </div>
    </div>
  )
}

export default login;
