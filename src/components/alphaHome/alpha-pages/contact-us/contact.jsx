    import React, { useState } from 'react';
    import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
    import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
    import MailOutlineIcon from '@mui/icons-material/MailOutline';
    import { userContact } from '../../../../services/userContact';


    const Contact = () => {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await userContact(email,subject,message);
        
        setEmail('');
        setSubject('');
        setMessage('');
    };

        return(
            <>
            <AlphaNavbar />
            <section class="bg-[#F5F5F5] p-3 ">
                <div class="  mx-auto bg-transparent max-w-screen-md rounded-md  pb-4 pt-4  ">
                    <div className=' flex rounded-md pt-4   border-t-4 bg-white p-5 border-[#4C5ADF] mt-6  text-xl gap-3 items-center mb-6'>   
                        <MailOutlineIcon fontSize='large'  className=' text-xl text-[#4C5ADF] '/>
                        <h2 class=" text-3xl tracking-tight font-extrabold text-left  text-black">Contact Us</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8 p-5  bg-white rounded-md">
                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-black">Your Mail</label>
                            <input required type="email" id="email"  onChange={(e) => setEmail(e.target.value)}  class="shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-[#6c7af8] focus:ring-[#6c7af8]  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white  dark:shadow-sm-light placeholder:opacity-70 "  ></input>
                        </div>
                        <div>
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Subject</label>
                            <input required type="text" id="subject" onChange={(e) => setSubject(e.target.value)} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  shadow-sm focus:border-[#6c7af8] focus:ring-[#6c7af8] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder:opacity-70" ></input>
                        </div>
                        <div class="sm:col-span-2 ">
                            <label for="message" class="block mb-2 text-sm font-medium text-black">Your message</label>
                            <textarea required id="message" onChange={(e) => setMessage(e.target.value)} rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-md shadow-sm border border-gray-300 focus:border-[#6c7af8] focus:ring-[#6c7af8] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500  bg-gray-50 " ></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-100 rounded-[0.25rem] bg-primary-700 sm:w-fit hover:bg-primary-800  bg-[#4C5ADF] hover:bg-primary-700 focus:border-[#6c7af8] focus:ring-[#6c7af8]">Send message</button>
                    </form>
                </div>
            </section>
            <AlphaFooter />
            </>
        )
    }
    export default Contact;