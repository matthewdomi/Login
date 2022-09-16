import React from "react";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
  return (
    <div className=' fixed shadow-lg relative opacity-90 z-10 w-full font-[Poppins] bg-white'>
      <header>
        <nav className='flex items-center shadow-md h-20 justify-between'>
          <div className='inline h-5  mx-5'>
            <img
              className='h-10 inline p-1 ml-3'
              src='https://i.postimg.cc/wBdNCzD4/demakicons.jpg'
              alt='DemakLogo'
            />
            <Link href='/'>
              <a className='text-xl font-bold ml-3 text-orange-700'>
                Demak Ventures
              </a>
            </Link>
          </div>
          <div className=''>
            <Search />
          </div>
          <div>
            <Link href='/cart'>
              <a className='p-2 text-orange-500 hover:rounded hover:bg-orange-300 hover:text-white hover:p-2 '>
                Cart
              </a>
            </Link>
            <Link href='/login'>
              <a className='p-2 text-orange-500 hover:rounded hover:bg-orange-300 hover:text-white hover:p-2 '>
                Login
              </a>
            </Link>
            <Link href='/ProductItems'>
              <a className='p-2 text-orange-500 hover:rounded hover:bg-orange-300 hover:text-white hover:p-2 '>
                Product
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
