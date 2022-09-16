import React from "react";
import Head from "next/head";
import Link from "next/link";
import Search from "./Search";
import Header from "./header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Demak Ventures" : "Demak Ventures"}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/login/public/demakicons.ico' />
      </Head>

      <div className='flex  min-h-screen flex-col justify-between'>
        <Header />
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <Footer />
      </div>
    </>
  );
}
