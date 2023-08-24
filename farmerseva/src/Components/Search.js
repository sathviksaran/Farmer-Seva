import React from 'react'
export default function Search() {
  return (
    <div>
       <div className="flex ml-16 rounded-md" >
       <div className='justify-center items-center w-full h-screen bg-gray-800 text-white relative rounded-md '>
       <p className='p-2 items-center text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white'>Search</p>
       <div className='flex gap-x-2 p-2'>
        <input type="text" className='w-50 rounded-lg bg-neutral-400/10 focus:bg-neutral-400/2  p-3 font-semibold font-medium' placeholder='Search here'></input>
        <p></p>
       </div>
        </div>
       </div>
    </div>
  )
}
