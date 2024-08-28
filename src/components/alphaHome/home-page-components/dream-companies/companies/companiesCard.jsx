import React from 'react';

const CompaniesCard = ({company}) => {
    return (
        <div className='h-24 w-40 min-h-32 min-w-52 flex items-center mt-2'>
            <img src={require(company.img)}  />
        </div>
    )
}

export default CompaniesCard;