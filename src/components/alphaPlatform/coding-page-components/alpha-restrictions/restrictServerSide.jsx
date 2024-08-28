import React from 'react'

const RestrictServerSide = () => {

    return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='h-40 w-40 mb-4'>
                    <img className='animate-spin ' style={{ animationDuration: '2.5s' }} src='https://www.svgrepo.com//show/408307/cog-wheel-settings.svg'></img>
                </div>
                <div className='text-center'>
                    <h5 className=" flex text-xl font-normal tracking-tight text-white">
                        <p>
                            Alpha Algo is under maintainence!
                        </p>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default RestrictServerSide;