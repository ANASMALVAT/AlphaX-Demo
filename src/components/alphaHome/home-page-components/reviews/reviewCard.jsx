import React from 'react';

import "./styles/reviewCard.css"

const  ReviewCard = ({review}) => 
{

    return <>
        <div className='flex bg-transparent w-[325px] max-w-[350px] p-2 h-[360px] rounded-md  justify-center'>
            { review.profile && <img className=' absolute w-20 h-20 rounded-full bg-gray-100' src={review.profile} ></img>  }

            <div className='flex flex-col mt-14 w-full h-[90%] bg-white rounded-[0.25rem] border-t-4 border-[#4C5ADF] align-center rounded-md '>

                {review.user_name && <div  className='user-name mt-6 '><h2 className=' text-[16px] font-normal text-algoblack mb-1 '>{review.user_name}</h2></div> }
                {review.position && <div  className='user-position '><h2 className=' text-[16px] text-algoblack'>{review.position}</h2></div> }
                {review.company && <div  className='user-company flex align-center mt-2'><img  className=' m-auto w-[80px] h-[25px]' src={review.company} alt="Image"/></div> }

                {review.description &&
                <div  className='user-review pb-2 overflow-auto mt-3 pl-2 rounded-md m-1'>
                    <h2 className='   text-left text-[14px] text-gray-600 font-light rounded-[0.25rem] w-[95%] '>
                        {review.description}
                     </h2>
                </div>
                }
            </div>
        </div>
    </>
}

export default ReviewCard;