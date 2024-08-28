import React  from 'react';
import CompaniesComponent from './companies/companiesComponent';
import "./dreamCompanies.css"

const DreamCompanies = () => {
    return (
    <div className=' dream-companies-container flex flex-col w-full  bg-[#F5F5F5] mt-24 mb-6 pt-16 p-8 min-h-[60vh] '>
        <div className=' dream-companies-text-container w-full flex  flex-col justify-center text-algoblack max-w-[1400px] m-auto'>
            <h2 className='text-4xl h-14 mb-4 font-semibold  '>Join Your Dream Company</h2>
            <h2 className=' text-description text-lg  text-gray-800 font-light  min-w-350px text-center m-auto te'>Alpha Algo, your ultimate stepping stone to land your dream job! 
            <br></br>
            Our all-in-one solution fills the missing gap in your preparation, providing the essentials you need to crack any coding interview.</h2>
        </div>
        <CompaniesComponent/>
    </div>)
}

export default DreamCompanies;