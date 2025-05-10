import { ArrowBigRight, ArrowRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-full flex flex-col text-center sm:text-justify items-center justify-center  gap-6'>
      <div className='max-w-full my-20 flex flex-row justify-center animate-bounce ease-in-out transition'>
        <a className="" href="">Download my Resume </a>
        <ArrowRight/>
      </div>
        <div className='w-full flex  items-center justify-center  '>
          <div className='w-11/12 text-[10px] border-t-2 border-neutral-300  text-gray-600 p-4 '>
          <p>Copyright © 2025 Mukul Rai. All rights reserved.</p>
          </div>

      </div>
    </div>
  )
}

export default Footer
