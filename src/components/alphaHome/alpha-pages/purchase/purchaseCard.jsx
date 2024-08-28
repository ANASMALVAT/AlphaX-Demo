import React from 'react';
import { purchaseAlpha } from '../../../../services/purchaseAlpha';
import "./purchaseCard.css"
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


export default function PricingCard() {
  
    const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);

    const purchaseAlphaAlgoMembership = (priceID) => {
        if(!IsUserLoggedIn){
            toast("Please login to continue!");
            return;
        }
        purchaseAlpha(priceID);
    }

  return (
    <section class=" dark:bg-gray-900  mb-16 flex justify-center ">
      <div class="  px-4  max-w-screen-xl flex-wrap flex gap-12   ">
            <div class="flex flex-col  h-[300px] max-h-[320px] min-w-[350px]  p-6 mx-auto max-w-[350px] text-center text-gray-900 bg-white rounded-[0.25rem] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div class="flex justify-center items-baseline mt-4 mb-8">
                  <span class="mr-2 text-4xl font-semibold text-blue-600  ">$24.99</span>
                  <span class=  " font-semibold  text-lg text-zinc-900 dark:text-gray-400">/3 months</span>
              </div> 
              <ul role="list" class="mb-12 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything <span className=' text-blue-700'>AlphaAlgo</span> offers.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20 <span className=' text-blue-700'>AlphaGPT</span>  calls per day.</span>
                  </li>
              </ul>
              <button onClick={() => purchaseAlphaAlgoMembership(process.env.REACT_APP_STRIPE_QUATER_PRICEID)} class="text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-[0.25rem] text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900">Get started</button>
          </div>
          <div class="flex flex-col  h-[300px] max-h-[320px] min-w-[350px]  p-6 mx-auto max-w-[350px] text-center text-gray-900 bg-white rounded-[0.25rem] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div class="flex justify-center items-baseline mt-4 mb-8">
                  <span class="mr-2 text-4xl font-semibold text-[#4857de]  ">$39.99</span>
                  <span class=  " font-semibold  text-lg text-zinc-900 dark:text-gray-400">/6 months</span>
              </div> 
              <ul role="list" class="mb-12 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything <span className=' text-blue-700'>AlphaAlgo</span> offers.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20 <span className=' text-blue-700'>AlphaGPT</span>  calls per day.</span>
                  </li>
              </ul>
              <button onClick={() => purchaseAlphaAlgoMembership(process.env.REACT_APP_STRIPE_HALFYEAR_PRICEID)} class="text-white bg-[#293497] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-[0.25rem] text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900">Get started</button>
          </div>
          <div class="flex flex-col  h-[300px] max-h-[320px] min-w-[350px]  p-6 mx-auto max-w-[350px] text-center text-gray-900 bg-white rounded-[0.25rem] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div class="flex justify-center items-baseline mt-4 mb-8">
                  <span class="mr-2 text-4xl font-semibold text-algoblack">$59.99</span>
                  <span class=" font-semibold text-lg text-zinc-900 dark:text-gray-400">/year</span>
              </div>
              <ul role="list" class="mb-12 space-y-4  text-left">
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Everything <span className=' text-blue-700'>AlphaAlgo</span> offers.</span>
                  </li>
                  <li class="flex items-center space-x-3">
                      <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>20 <span className=' text-blue-700'>AlphaGPT</span>  calls per day.</span>
                  </li>
              </ul>
              <button onClick={() => purchaseAlphaAlgoMembership(process.env.REACT_APP_STRIPE_YEARLY_PRICEID)} class="text-white bg-algoblack hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-[0.25rem] text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-900">Get started</button>
          </div>
  </div>
</section>
  );
}