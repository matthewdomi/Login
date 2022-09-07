import React from 'react'
import Head from 'next/head'

import SignIn from '../components/login.component/sign-in';
import SignUp from '../components/login.component/sign-up';

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
         
         <SignIn />
          {/* sign in section */}
           



            {/* sign up section */}
            <SignUp />
        </div>
      </main>


    </div>
    </div>
  )
}

export default login;
