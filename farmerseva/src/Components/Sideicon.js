import React from 'react'

export default function Sideicon(props) {
  return (
    <div className=' group relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear'>
        {props.icon}
        
    </div>
  )
}
