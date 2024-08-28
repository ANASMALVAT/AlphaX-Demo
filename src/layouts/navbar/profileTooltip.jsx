import React, { Component } from 'react'
import "./styles/tooltip.css"
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileTooltip = ({logout,setIsOpen}) => {
    return <>    
        
            <div className="flex flex-col items-center  w-[200px]  h-full  rounded-sm  focus:border-none  ">
                <div class=" relative border-t-[0px] ml-4 border-l-[10px] border-r-[10px] border-b-[10px] w-4 border-transparent border-b-zinc-400 "></div>

                <div className=" flex flex-col h-[125px]  gap-1  flex-wrap w-full rounded-md bg-zinc-200 p-2">
                    <Link to={"/account/dashboard"}  className='border-none focus:outline-none focus:border-none'>
                        <div onClick={() => setIsOpen(false)} className='  w-full  mt-1 flex gap-2 items-center  text-algoblack shadow-lg bg-[#F5F5F5]  justify-center text-center p-2  rounded-sm'>
                            <h1  className=' text-[17px] font-normal '>Dashboard</h1>
                        </div>
                    </Link>
                    <div onClick={logout} className=' cursor-pointer     w-full  mt-1 flex items-center  text-white gap-2 shadow-lg bg-[#626EE3] justify-center text-center p-2  rounded-sm'>
                        <LogoutIcon /> 
                        <h1  className=' text-[17px] font-light '>Logout</h1>
                    </div>
                </div>
            </div>
    </>

}

export default ProfileTooltip;