'use client';

import { Card } from 'flowbite-react';
import "./styles/cardComponent.css"

export default function DefaultCard({key, features}) {
  return (
    <Card
    className={`card-css card-css max-w-[390px] p-2 mb-8  bg-transparent cursor-default rounded-sm  border-0  border-b-2    border-gray-700 text-center items-center justify-center`}>
      <div className='flex card-css '>
        <div className='flex flex-col gap-4 '>
          <div className=' flex w-10 h-10  rounded-lg bg-algoXcolor m-auto '>
            {features.svg}
          </div>
          <div className=' w-full '>
            <h5 className="text-xl font-normal m-auto tracking-tight text-white">
              <p className=''>
                {features.title}
              </p>
            </h5>
          </div>
          <div className='w-full px-3'>
            <p className="text-md text-gray-300 ">
              <p className=''>
                  {features.info}
              </p>
            </p>
          </div>
        </div>
      </div>
      
    </Card>
  )
}


