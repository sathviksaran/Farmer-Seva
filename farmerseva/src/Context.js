import React, { useState } from 'react'
import { useContext } from 'react'
export const dataprovider = React.createContext()
export function useProduct(){
  return useContext(dataprovider)
}


export function Context({ children }) {
  const [username,setusername]=useState(null)
  const [password,setpassword]=useState(null)

  const setprofile=(user,pass)=>{
    console.log(user,pass)
    setusername(user)
    setpassword(pass)
  }
const totaldata={
  username,password,setprofile,setusername
}
  return (
    <dataprovider.Provider value={totaldata}>
      {children}
    </dataprovider.Provider>
  )
}
