import React from 'react';

const  TeamCard = ({team}) => 
{

    return <>
        <div className='flex bg-transparent w-[400px] max-w-[400px] p-2 h-[375px] rounded-md  justify-center  '>
            { team.img && <img className=' absolute w-24 h-24 rounded-full shadow-2xl' src={team.img} ></img>  }
            <div className='flex flex-col justify-center items-center  mt-16 w-full h-[90%] bg-transparent rounded-[0.25rem] border-t-[5px] border-b-[4px]  border  border-gray-200  border-t-[#4C5ADF] border-b-[#4C5ADF]  align-center rounded-md '>
                <div  className='user-name mt-10 '><h1 className=' tracking-tight  text-[22px] font-normal  text-algoblack mb-1 '>{team.name}</h1></div>
                <div  className='user-position '><h1 className=' tracking-tight text-[18px] text-[#4C5ADF]'>{team.position}</h1></div>
                <div  className='user-review pb-2 overflow-auto mt-3 pl-2 rounded-md m-1'>
                    <h2 className='   text-left text-[14px] text-gray-600 font-light rounded-[0.25rem] w-[95%] '>
                        {team.description}
                    </h2>
                </div>
            </div>
        </div>
    </>
}

export default TeamCard;