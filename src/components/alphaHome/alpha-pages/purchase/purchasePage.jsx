import React from 'react'
import PricingCard from './purchaseCard'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import AlphaFooter from '../../../../layouts/footer/AlphaFooter'
import "./purchase.css"

const Purchase = () => {
    return(
        <>
        <AlphaNavbar/>
        <div className='purchase w-full min-h-[600px] bg-algoblack flex  flex-col  '>
            <div className='mt-10'>
                <PricingCard/>
            </div>
        </div>
        <AlphaFooter/>
        </>
    )
}
export default Purchase;