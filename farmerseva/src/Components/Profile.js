import React from 'react'
import { twMerge } from 'tailwind-merge'
export default function Profile({className}) {
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
            </div>
        </div>
    )
}
