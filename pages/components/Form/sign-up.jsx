import React from 'react'


const SignUp = () => {
  return (
   
        // <div classNameName="w-2/5 bg-orange-800 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
        //       <h2 classNameName='text-3xl font-bold mb-2'>Hello User</h2>
        //       <div classNameName="border-2 w-10 border-white inline-block mb-2"></div>
        //       <p classNameName='mb-10'>Please fill in the required filled and get started</p>
        //     <a href='#' classNameName='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-orange-700 '>
        //       Sign Up</a>
        //     </div>
<div className="p-4 w-full max-w-sm bg-white rounded-lg border  shadow-xl sm:p-6 md:p-8 bg-white-800 border-orange-300">       
<form>
<h5 className="text-3xl mb-4 font-medium text-orange-500 ">Sign Up </h5>
<div>
            <label for="email" className="block mb-2 text-sm font-medium text-orange-500 ">Your email</label>
            <input type="email" 
            name="email" 
            id="email" 
            className="bg-orange-40 border border-orange-300 text-orange-500 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " 
            placeholder="name@company.com"
             required="true" />
        </div>
        <div>
            <label for="password" 
            className="block mb-2 mt-3 text-sm font-medium text-orange-500"
            >Your password</label>
            <input type="password" 
            name="password" 
            id="password" 
            placeholder="••••••••" 
            className="bg-orange-40 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
             required="true" />
        </div>
          <div className="mb-6">
            <label 
            for="repeat-password" 
            className="block mb-2 mt-3 text-sm font-medium text-orange-500 "
            >Repeat password</label>
            <input type="password" 
            id="repeat-password" 
            className="bg-orange-40  border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            required="" />
          </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="terms" 
      type="checkbox" 
      value="" 
      className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " 
      required="" />
    </div>
    <label for="terms"
     className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
     >I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-orange-800 bg-orange-200 hover:bg-orange-800 hover:text-white focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
</form>
</div>
  
  )
}

export default SignUp

// Register Form

