import React, { useContext, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import axios from 'axios';
import profile2 from '../Images/profile2.jpg'
import { dataprovider } from '../Context';
export default function AddItem({ className }) {
    const [firstname,setfirst]=useState();
    const [lastname,setlast]=useState();
    const [city,setcity]=useState();
    const [village,setvillage]=useState()
    const [address,setadress]=useState()
    const [phone,setphone]=useState()
    const [conemail,setconemail]=useState();
    const [zipcode,setzipcode]=useState()
    const [cropname,setcropname]=useState()
    const [cropimage,setcropimage]=useState()
    const {username}=useContext(dataprovider)
    const submitHandler=async()=>{
        const reader=new FileReader();
        const img=document.getElementById("crop_image").files[0]
        reader.readAsDataURL(img)
        reader.onload=()=>{
            setcropimage(reader.result)
        }
        
    }
    return (
        <div className="flex ml-16 rounded-md -z-10" >

            <div className='h-full justify-center items-center w-full bg-gray-800 text-white relative rounded-md overflow-y-auto'>
                <div className={twMerge(`
                    h-fit 
                    bg-gradient-to-b 
                from-emerald-800 
                    p-6
                    `,
                    className
                )}>
                </div>
                <div className='lg:flex md:none'>
                    <div className=' text-white p-2 m-3 h-screen w-[500px] md:h-fit lg:h-screen'>
                        <div className=' grid gap-y-2 bg-gray-700 rounded-xl h-64 w-full top-0'>
                            <div className='w-[200px] h-[200px]  aspect-square rounded-xl p-3 items-center text-center'>
                                <img  src={profile2} fill className='rounded-xl'></img>
                              <p className='font-sans'>{username}</p>
                            </div>
                            <div>
                            <input type='file' name="profile" id="profile" hidden></input>
                               <button className='bg-slate-900 hover:bg-slate-400 rounded-xl mx-4 p-2'><label for="profile">Upload image</label></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-700 rounded-xl text-white h-screen w-full mr-9 lg:mr-9 md:p-4'>
                        <p className='font-semibold p-2 ml-9 text-2xl rounded-lg '> Personal info</p>
                        <div className='flex gap-x-3 '>
                            <div className='w-96 ml-6'>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setfirst(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setcity(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setadress(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setconemail(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Email</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setcropname(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Crop name</label>
                                </div>
                            </div>
                            <div>
                            <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setlast(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setvillage(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Village</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" onChange={(e)=>setphone(e.target.value)} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="email" name="floating_email" onChange={(e)=>setzipcode(e.target.value)} id="floating_email" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="floating_email" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zip code</label>
                                </div>
                                <div class="relative z-0 w-52 mb-6 group p-2">
                                    <input type="file" name="crop_image" id="crop_image" class="block py-2.5 px-0 w-full text-md  bg-transparent  border-b-2  appearance-none text-white border-white focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                                    <label for="crop_image" class="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Crop image</label>
                                </div>
                                </div>
                               
                            </div>
                           <div className='justify-center items-center text-center'>
                            <button className='bg-gray-800 p-2 rounded-lg mx-4  hover:bg-gray-500 transition hover:-translate-y-3 hover:shadow-md' onClick={()=>submitHandler()}>Submit</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
