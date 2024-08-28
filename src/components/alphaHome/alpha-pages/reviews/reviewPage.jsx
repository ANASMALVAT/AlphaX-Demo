import React from 'react';
import { useState,useLayoutEffect } from 'react';
import ReviewCard from '../../home-page-components/reviews/reviewCard';
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
import { fetchReviewList } from '../../../../services/fetchReviewList';
import ReviewCardDummy from '../../home-page-components/reviews/reviewCardDummy';
import "./reviewPage.css"

const ReviewPage = () => {

    const [reviews,setReviews] = useState([]);
  
    useLayoutEffect(() => {
      fetchReviewList().then(
        reviewList => {
          setReviews(reviews => reviewList);
        })
        .catch(error =>  { console.log("error"); } )
    },[])

    return <>
        <div className='  bg-[#F5F5F5] w-screen  min-h-screen flex flex-wrap  justify-center '>
            <AlphaNavbar />
            <div className=' flex flex-col w-full mt-4 h-50 justify-center items-center'>
                <h1 className='review-page-heading   '>Meet The True Alphas</h1>
                <h2 className="review-page-description text-gray-600 mt-4 w-[550px] text-center text-[15px] font-light">
                    Meet real people who've conquered coding interviews and smoothly transitioned in their careers, sharing heartfelt experiences of empowerment through AlphaAlgo's supportive resources and strategic guidance.                
                </h2>    
            </div>
            <div className=' flex flex-wrap w-screen py-14 mb-20 bg-[#F5F5F5] gap-6 justify-center'>
                {
                    <ReviewCardDummy  />
                }
                {
                    Array.from({ length: reviews.length }, (_, index) => (
                        <ReviewCard review={reviews[index]} />
                    ))
                }
            </div>
            <div className=' w-screen'>
                <AlphaFooter /> 
            </div>
        </div>
      
    </>
}

export default ReviewPage;