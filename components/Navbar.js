import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Navbar({ title }) {
  return (
    <>
      <Head s>
        <title>{title ? title + " - Demak Ventures" : "Demak Ventures"}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='flex items-center shadow-md h-12 justify-between'>
        <Link href='/'>
          <a className='text-lg font-bold'>Demak Ventures</a>
        </Link>
        <div>
          <Link href='/cart'>Cart</Link>
          <Link href='/login'>Login</Link>
        </div>
      </nav>
    </>
  );
}
