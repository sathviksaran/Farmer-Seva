import React, { useCallback, useState } from 'react'
import paddy from '../Images/paddy2.jpg'
import { FaShoppingCart } from 'react-icons/fa'
export default function SearchItem(props) {
    const [toggle,settoggle]=useState(false)
    const handleLike=useCallback(()=>{
        settoggle((currentval)=>currentval===false?true:false)
    },[])
  return (
    <div
   
    className="
      flex 
      items-center 
      gap-x-3 
      cursor-pointer 
      bg-neutral-800/50
      hover:bg-neutral-700 
      w-full 
      p-2 
      rounded-md
    "
  >
    <div 
      className="
        relative 
        rounded-md 
        max-h-[48px] 
        max-w-[48px] 
        overflow-hidden
      "
    >
      <img
        fill
        src={props.image}
        alt="MediaItem"
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-y-1 overflow-hidden">
      <p className="text-white truncate">{props.name}</p>
    
    </div>
  <div className=' float-right right-0 mr-20 absolute'>
   
  
  <button 
      className="
        cursor-pointer 
        hover:opacity-75 
        transition
      "
      onClick={handleLike}
    >
      <FaShoppingCart color={toggle ? '#22c55e' : 'white'}></FaShoppingCart>
    </button>
    
  </div>
  </div>
  )
}