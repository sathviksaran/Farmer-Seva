import React from 'react'

export default function Sideicon(props) {
  return (
    
    <div>
    <div className=' peer relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear'>
        {props.icon}
       
    </div>
  
    {/* <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded=md text-white bg-gray-900 text-xs font-semibold  transition-all duration-100 scale-0 orgigin-left peer-hover:scale-100 peer-hover:z-40'>{props.text}</span> */}
    </div>
   
  )
}
