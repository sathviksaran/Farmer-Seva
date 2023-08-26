import React, { useState } from 'react'
import { useContext } from 'react'
import paddy from "./Images/paddy2.jpg"
import maize from './Images/maize2.jpg'
import bannana from './Images/bannana2.jpg'
import cotton from './Images/cotton.jpg'
import wheat from './Images/wheat.jpg'
import barley from './Images/barley.jpg'
import gram from './Images/gram.jpg'
import peas from './Images/peas.jpg'
import {twMerge} from 'tailwind-merge'
import tobaco from './Images/tobaco.webp'
import milllets from './Images/milltes.jpg'
import soyabean from './Images/soyabean.jpg'
import pulses from './Images/pulses.jpg'
export const dataprovider = React.createContext()
export function useProduct(){
  return useContext(dataprovider)
}


export function Context({ children }) {
  const [username,setusername]=useState(null)
  const [password,setpassword]=useState(null)
  const images=[{name:"Paddy",image:paddy},{name:"Millets",image:milllets},{name:"Pulses",image:pulses},{name:"Soyabean",image:soyabean},{name:"Tobaco",image:tobaco},
  {name:"Peas",image:peas}
  ,{name:"Gram",image:gram},{name:"Barley",image:barley},{name:"Wheat",image:wheat},{name:"Cotton",image:cotton},{name:"Banana",image:bannana},{name:"Maize",image:maize}]
  const setprofile=(user,pass)=>{
    console.log(user,pass)
    setusername(user)
    setpassword(pass)
  }
const totaldata={
  username,password,setprofile,setusername,images
}
  return (
    <dataprovider.Provider value={totaldata}>
      {children}
    </dataprovider.Provider>
  )
}
