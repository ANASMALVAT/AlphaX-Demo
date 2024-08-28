import React, { useState } from 'react';
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
import MessageIcon from '@mui/icons-material/Message';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { userSubmitReivew } from '../../../../services/userReview';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';

const SubmitReivew = () => {

    
const [email, setEmail] = useState('');
const [linkedin,setLinkedin] = useState('');
const [position, setPosition] = useState('');
const [company,setCompany] = useState('');
const [message, setMessage] = useState('');
const AlphaPremiumUser = useSelector((state) => state.alphaPremiumUser.alphaPremiumUser);
const isPremium = AlphaPremiumUser?.subscription_status;


const showNotification = (notification) => {
    toast.error(notification, {
      position:"top-center",
      autoClose:4000,
      hideProgressBar:true,
      newestOnTop:false,
      theme:"dark",
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateLinkedInURL(linkedin)) {
        showNotification("Please Enter Valid LinkedIn URL.");
        return;
    }

    const reviewResponse = await userSubmitReivew(email, linkedin, position, company, message);

    if(reviewResponse.success){
        setEmail(email => '');
        setLinkedin(linkedin => '');
        setPosition(position => '');
        setCompany(company => '');
        setMessage(message => '');
    }
};

    const validateLinkedInURL = (url) => {
        const regex = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
        return regex.test(url);
    };

    return(
        <>
        <AlphaNavbar />
        <section class="bg-[#F5F5F5] p-3 ">
            <div class="  mx-auto bg-transparent max-w-screen-md rounded-md  pb-4 pt-4  ">
                <div className=' flex rounded-md pt-4  border-t-4 bg-white p-5 border-[#4C5ADF] mt-6  text-xl gap-3 items-center mb-6'>   
                    <MessageIcon fontSize='large'  className=' text-xl pt-1 text-[#4C5ADF] '/>
                    <h2 class=" text-3xl tracking-tight font-extrabold text-left  text-algoblack">Submit Your Review</h2>
                    {!isPremium && 
                        <Popup
                            trigger={
                                <LockPersonIcon  fontSize='large'  className=' ml-auto text-xl pt-1 text-[#4C5ADF] ' />
                            }
                            closeOnEscape
                            position={"top center"}
                            on={['hover']}
                            open
                            arrow={"top center" !== 'center center'}
                        >
                            <div className='flex flex-col justify-center items-center'>
                                <div className=' w-40 p-1 text-center h-12 bg-algoXcolor flex justify-center items-center rounded-md ' >
                                    <span className=' text-white '>Buy Alpha To Submit</span>
                                </div>
                                <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-algoXcolor"></div>
                            </div>
                        </Popup>
                    
                    }
                    {
                        isPremium && <LockOpenIcon  fontSize='large'  className=' ml-auto text-xl pt-1 text-[#4C5ADF] ' />
                    }

                </div>
                <form onSubmit={handleSubmit} className="space-y-8 p-5  bg-white rounded-md">
                    
                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Mail</label>
                        <input required value={email} type="email" id="email" onChange={(e) => setEmail(e.target.value)} readOnly={!isPremium} class={`shadow-sm bg-${isPremium ? 'gray-50' : 'gray-100'} border border-gray-300 text-gray-${isPremium ? '900' : '700'} text-sm font-normal rounded-md focus:border-[#6c7af8] focus:ring-[#6c7af8] block w-full p-2.5 dark:bg-gray-${isPremium ? '700' : '800'} dark:border-gray-${isPremium ? '600' : '700'} dark:placeholder-gray-300 dark:text-white dark:shadow-sm-light placeholder:opacity-${isPremium ? '70' : '50'}`} />
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Linkedin</label>
                        <input required value={linkedin}  id="linkedin"  onChange={(e) => setLinkedin(e.target.value)} readOnly={!isPremium} class={`shadow-sm bg-${isPremium ? 'gray-50' : 'gray-100'} border border-gray-300 text-gray-${isPremium ? '900' : '700'} text-sm rounded-md focus:border-[#6c7af8] focus:ring-[#6c7af8] block w-full p-2.5 dark:bg-gray-${isPremium ? '700' : '800'} dark:border-gray-${isPremium ? '600' : '700'} dark:placeholder-gray-300 dark:text-white dark:shadow-sm-light placeholder:opacity-${isPremium ? '70' : '50'}`} />
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Position</label>
                        <input required value={position} type='text' id="position" onChange={(e) => setPosition(e.target.value)} readOnly={!isPremium} class={`shadow-sm bg-${isPremium ? 'gray-50' : 'gray-100'} border border-gray-300 text-gray-${isPremium ? '900' : '700'} text-sm rounded-md focus:border-[#6c7af8] focus:ring-[#6c7af8] block w-full p-2.5 dark:bg-gray-${isPremium ? '700' : '800'} dark:border-gray-${isPremium ? '600' : '700'} dark:placeholder-gray-300 dark:text-white dark:shadow-sm-light placeholder:opacity-${isPremium ? '70' : '50'}`} />
                    </div>

                    <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Company</label>
                        <input required value={company} type="text" id="company" onChange={(e) => setCompany(e.target.value)} readOnly={!isPremium} class={`block p-3 w-full text-sm text-gray-${isPremium ? '900' : '700'} bg-${isPremium ? 'gray-50' : 'gray-100'} rounded-md border border-gray-300 shadow-sm focus:border-[#6c7af8] focus:ring-[#6c7af8] dark:bg-gray-${isPremium ? '700' : '800'} dark:border-gray-${isPremium ? '600' : '700'} dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder:opacity-${isPremium ? '70' : '50'}`} />
                    </div>
                    
                    <div class="sm:col-span-2 ">
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Review</label>
                        <textarea required value={message} id="message" onChange={(e) => setMessage(e.target.value)} readOnly={!isPremium} rows="6" class={`block p-2.5 w-full text-sm text-gray-${isPremium ? '900' : '700'} rounded-md shadow-sm border border-gray-300 focus:border-[#6c7af8] focus:ring-[#6c7af8] dark:bg-gray-${isPremium ? '700' : '800'} dark:border-gray-${isPremium ? '600' : '700'} dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-${isPremium ? 'gray-50' : 'gray-100'}`} />
                    </div>

                    <button  disabled={!isPremium}  type="submit" class={`${!isPremium ? 'opacity-50' : ''} py-3 px-5 text-sm font-medium text-center text-gray-100 rounded-[0.25rem] bg-primary-700 sm:w-fit hover:bg-primary-800  bg-[#4C5ADF] hover:bg-primary-700 focus:border-[#6c7af8] focus:ring-[#6c7af8]`}>Send Review</button>
                </form>
            </div>
        </section>
        <AlphaFooter />
        </>
    )
}
export default SubmitReivew;