import React, { useCallback, useContext, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import SearchItem from './SearchItem'
import { dataprovider } from '../Context'
export default function Search() {
  const {images}=useContext(dataprovider)
  const data=images
  document.getElementById("search").addEventListener('keyup',()=>{
    var search=document.getElementById("search").value
   const sample=images.filter((value,index)=>{
    return value.name.includes(search)>-1
   })
   console.log(sample)
  })

  return (
    <div>
       <div className="flex ml-16 rounded-md" >
       <div className='justify-center items-center w-full h-full p-4 bg-gray-800 text-white relative rounded-md overflow-y-auto'>
       <p className='p-2 items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Search</p>
       <div className='grid grid-cols-1 gap-y-4'>
       <div>
       <input
      type="text"
      id="search"
      placeholder='what do u wanna shop ?.....'
      className={twMerge(
        `
        flex 
        w-full
        rounded-md 
        bg-neutral-700
        border
        border-transparent
        px-3 
        py-3 
        text-sm 
        file:border-0 
        file:bg-transparent 
        file:text-sm 
        file:font-medium 
        placeholder:text-neutral-400 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        focus:outline-none
      `
      )}
      
    />
    </div>
    {images.map((value)=>{
      return <SearchItem image={value.image} name={value.name}></SearchItem>
    })}
     
        </div>
        </div>
       </div>
    </div>
  )
}
