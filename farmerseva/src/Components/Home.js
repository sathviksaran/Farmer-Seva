import React, { useContext } from 'react'
import { dataprovider } from '../Context'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './console'
import paddy from "../Images/paddy2.jpg"
import maize from '../Images/maize2.jpg'
import bannana from '../Images/bannana2.jpg'
import cotton from '../Images/cotton.jpg'
import wheat from '../Images/wheat.jpg'
import barley from '../Images/barley.jpg'
import CardItem from './CardItem'
import gram from '../Images/gram.jpg'
import peas from '../Images/peas.jpg'
import {twMerge} from 'tailwind-merge'
import tobaco from '../Images/tobaco.webp'
import milllets from '../Images/milltes.jpg'
import soyabean from '../Images/soyabean.jpg'
import pulses from '../Images/pulses.jpg'
export default function Home({className}) {
  const {username,setusername}=useContext(dataprovider)
  const navigate=useNavigate()
  const logoutHandler=()=>{
    console.log("logout")
    signOut(auth).then((res)=>{
      setusername(null)
      navigate("/")
    }).catch((e)=>console.log(e))

  }
  return (
    <div>
     
   <div className="flex ml-16 rounded-md" >
   
     <div className='h-full justify-center items-center w-full bg-gray-800 text-white relative rounded-md overflow-y-auto'>
      
    <div  className={twMerge(`
      h-fit 
      bg-gradient-to-b 
      from-emerald-800 
      p-6
      `,
      className
    )}>
       <p className='p-2 items-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'> Farmer Seva</p>
    </div>
       
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
      <CardItem name="paddy" img={paddy}></CardItem>
      <CardItem name="Maize" img={maize}></CardItem>
      <CardItem name="Bannana" img={bannana}></CardItem>
      <CardItem name="Cotton" img={cotton}></CardItem>
      <CardItem name="Wheat" img={wheat}></CardItem>
      <CardItem name="Barley" img={barley}></CardItem>
      <CardItem name="Grams" img={gram}></CardItem>
      <CardItem name="Peas" img={peas}></CardItem>
      <CardItem name="Tobaco" img={tobaco}></CardItem>
      <CardItem name="Millets" img={milllets}></CardItem>
      <CardItem name="Soyabean" img={soyabean}></CardItem>
      <CardItem name="Pulses" img={pulses}></CardItem>
     </div>
     </div>
   </div>
   </div>
  )
}