import React, { useEffect, useLayoutEffect, useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { fetchReviewListHome } from '../../../../services/fetchReviewListHome';
import ReviewCard from './reviewCard';
import ReviewCardDummy from './reviewCardDummy';
import "./styles/reviewCardGrid.css";

const ReviewCardGrid = () => {



  const [reviews,setReviews] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  useLayoutEffect(() => {
    fetchReviewListHome().then(
      reviewList => {
        setReviews(reviews => reviewList);
      })
      .catch(error =>  { console.log("error"); } )
  },[])

  const totalCards = reviews.length;

  const moveRight = () => {
    if (cardIndex < totalCards) {
      setCardIndex(prevIndex => prevIndex + 1);
    }
  };

  const moveLeft = () => {
    if (cardIndex > 0) {
      setCardIndex(prevIndex => prevIndex - 1);
    }
  };

  const getCardShowWidth = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 1000;
    } else if (windowWidth >= 900) {
      return 680;
    } else if (windowWidth >= 500) {
      return 320;
    } else {
      return 320;
    }
  };

  const [cardShowWidth, setCardShowWidth] = useState(getCardShowWidth);

  const handleResize = () => {
    setCardShowWidth(getCardShowWidth());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='mb-3'>
        <h1 className=' text-4xl m-auto flex text-center justify-center'>Be The Next Alpha</h1>
      </div>

      <div className='ml-2  card-show max-w-full flex gap-3 overflow-hidden show-card transition-transform ease-in-out duration-300' style={{ willChange: 'transform', maxWidth: `${cardShowWidth}px` }}>
      {
        Array.from({ length: reviews.length }, (_, index) => (
          <div key={index} style={{ transition: '200ms', width: `${cardShowWidth}px`, transform: `translateX(-${cardIndex * 103.5}%)`, backfaceVisibility: 'hidden' }}>
            <ReviewCard review={reviews[index]} />
          </div>
        ))  
      }

      {
        <ReviewCardDummy cardShowWidth={cardShowWidth} cardIndex={cardIndex} />
      }

      </div>

      <div className='button-container mt-4 flex m-auto'>
        <ArrowRightAltIcon
          className='arrow-font rounded-full rotate-180'
          fontSize='large'
          sx={{ color: '#4C5ADF', margin: "10px", borderRadius: "50px" }}
          onClick={moveLeft}
        />
        <ArrowRightAltIcon
          className='arrow-font rounded-full'
          fontSize='large'
          sx={{ color: '#4C5ADF', margin: "10px",marginRight:"25px", borderRadius: "50px" }}
          onClick={moveRight}
        />
      </div>
    </div>
  );
};

export default ReviewCardGrid;
