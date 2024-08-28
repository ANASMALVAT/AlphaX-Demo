import React from 'react'
import { Link } from 'react-router-dom';
import { user_profile } from '../../../../utils/constants';

const ReviewCardDummy = ({cardShowWidth, cardIndex}) => {
    return (
        <div  style={{ transition: '200ms', width: `${cardShowWidth}px`, transform: `translateX(-${cardIndex * 103.5}%)`, backfaceVisibility: 'hidden' }}>
          <div className='flex bg-[#F5F5F5] w-[325px] max-w-[350px] p-2 h-[360px] rounded-md  justify-center'>
              { <img className=' absolute w-20 h-20 rounded-full bg-gray-50' src={user_profile} ></img>  }
              <div className='flex flex-col mt-14 w-full h-[90%] bg-white rounded-[0.25rem] border-t-4 border-[#4C5ADF] align-center rounded-md '>
                  { <div  className='user-name mt-6 '><h2 className=' text-[16px] font-normal text-algoblack mb-1 '>You</h2></div> }
                  { <div  className='user-position '><h2 className=' text-[16px] text-algoblack'>Dream Job</h2></div> }
                  {
                  <div  className='user-review pb-2 overflow-auto mt-10 pl-2 bg-zinc-100 py-3 px-2  rounded-md m-1'>
                      <h2 className='   text-left text-[14px] text-gray-600 font-light rounded-[0.25rem] w-[95%] '> 
                        Did Alpha Algo helped you land a job? 
                      </h2>
                      <h2 className='text-left text-[14px] mt-2 text-gray-600   font-light rounded-[0.25rem] w-[100%] '>
                        <Link to={"/reviews/submit"}>
                          <span className=' font-normal text-[15px] text-[#4C5ADF] hover:underline cursor-pointer '>Let us know </span>
                        </Link>
                        about your position, How did Alpha Algo played a role in your success and share us your Linkedin Profile.</h2>
                  </div>
                  }
              </div>
          </div>
        </div>
    )
}

export default ReviewCardDummy;