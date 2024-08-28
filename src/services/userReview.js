import axios from "axios";
import { toast } from "react-toastify";

const SUBMIT_REVIEW_URL = process.env.REACT_APP_SUBMIT_USER_REVIEW;

export async function userSubmitReivew(email, linkedin, position, company, message) {
  

    const showNotification = (notification) => {
        toast.success(notification, {
          position:"top-center",
          autoClose:4000,
          hideProgressBar:true,
          newestOnTop:false,
          theme:"dark",
        });
      };

    const showError = (notification) => {
        toast.error(notification, {
          position:"top-center",
          autoClose:4000,
          hideProgressBar:true,
          newestOnTop:false,
          theme:"dark",
        });
      };

    const config = {
        user_email:email,
        user_linkedin:linkedin,
        user_position:position,
        user_company:company,
        user_review:message
      }; 
    
  
    try {

      const response = await axios.post(SUBMIT_REVIEW_URL, config, { headers: 
        { 
           "Content-Type": "application/json", Authorization: `${localStorage.getItem('csrf-token')}`},
           withCredentials:true
        });

        if (response.status === 200) {
          showNotification("Thank you for submitting your review!")
          return {success:true, response:response};
        }
        else {
          showError("Error durring submission,please get back to us later!")
          return { success: false, message: 'Error Submitting Message' };
        }
      }
      catch (err) {
        if(err.response.status === 401){
            showError("Please Purchase Alpha to submit")
            return { success: false, message: 'Error Submitting Message' };
        }
        else{
            showError("Error durring submission,please get back to us later!")
            return { success: false, message: 'Error Submitting Message' };
        }
      }

}