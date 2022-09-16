import React from "react";

const Homepage = () => {
  return (
    <>
      <div className='h-40 align-center flex flex-col rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 md:grid-cols-3 lg:grid-cols-4'>
        <p className='p-4 text-white text-3xl '> YOUR HOME OF QUALITY WEARS</p>
        <p className='p-4 text-white'>
          Reliable suppliers of men,women,kids clothing @ wholesale and retail
          prices.Also deal in original phones, laptops and accessories ...
          <button className='text-red-100 hover:text-orange-100 hover:underline'>
            Read More
          </button>
        </p>
      </div>
    </>
  );
};

export default Homepage;
