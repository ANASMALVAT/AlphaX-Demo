import axios from "axios";
import { toast } from "react-toastify";

const CONTACT_URL = process.env.REACT_APP_SUBMIT_USER_ISSUE;

export async function userContact(user_email,user_subject,user_message) {
  
    const config = {
        user_email:user_email,
        user_subject:user_subject,
        user_message:user_message
      }; 
    
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
  
    try {

      const response = await axios.post(CONTACT_URL, config);
        if (response.status === 200) {
          showNotification("We will get back to you soon!")
          return response;
        }
        else {
          showError("Error durring submission, get back to us later!")
           return { success: false, message: 'Error Submitting Message' };
        }
      }
      catch (err) {
        showError("Error durring submission, get back to us later!")
        return { success: false, message: 'Error Submitting Message' };
      }

}