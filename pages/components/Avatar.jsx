import React from 'react'

const Avatar = () => {
  return (
    <div>
      
<img id="avatarButton" 
type="button" 
data-dropdown-toggle="userDropdown" 
data-dropdown-placement="bottom-start"
 className="w-10 h-10 rounded-full cursor-pointer" 
 src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown" />


<div id="userDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 410px);">
    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div className="py-1">
      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

    </div>
  )
}

export default Avatar

// Where human head with dropdown of sign out ...