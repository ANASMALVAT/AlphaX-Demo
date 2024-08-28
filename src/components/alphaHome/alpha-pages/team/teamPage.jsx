import React from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
import TeamMember from './teamMembers'
import { teamMembers } from '../../../../data/teamMembers';



const Team = () => {
        return  (
            <>
            <AlphaNavbar/>
            <div className=' w-full h-full flex flex-grow flex-row-3 bg-[#F5F5F5] justify-center pt-4 min-h-screen'>
                {
                    teamMembers.map((value)=>{
                        return <TeamMember team={value}  />
                    })
                }
            </div>
            <AlphaFooter/>
            </>
           
        )
}

export default Team;