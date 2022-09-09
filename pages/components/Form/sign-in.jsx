import React from 'react';
import Link from "next/link"

const SignIn = () => {
  return (
    <div>
      
<div className="p-4 w-full max-w-sm bg-white rounded-lg border  shadow-md sm:p-6 md:p-8 bg-white-800 border-orange-300">
    <form className="space-y-6" action="#">
        <h5 className="text-3xl font-medium text-orange-500 ">Sign in </h5>
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
            <label for="password" className="block mb-2 text-sm font-medium text-orange-500">Your password</label>
            <input type="password" 
            name="password" 
            id="password" 
            placeholder="••••••••" 
            className="bg-orange-40 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
             required="true" />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember"
                     type="checkbox" 
                     value="" 
                     className="w-4 h-4 bg-orange-50 text-orange-500 rounded border border-orange-300 focus:ring-3 focus:ring-orange-300    ring-offset-orange-800" 
                     required="" />
                </div>
                <label for="remember" className="ml-2 text-sm font-medium text-orange-900 ">Remember me</label>
            </div>
            <a href="#" className="ml-auto text-sm text-orange-700 hover:underline dark:text-orange-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
        >Login to your account</button>
        <div className="text-sm font-medium text-orange-400 ">
            Not registered? <a href="#" className="text-orange-700 bg-orange-100 rounded py-1 px-2 hover:underline">Create account</a>
        </div>
    </form>
</div>

    </div>
  )
}

export default SignIn
