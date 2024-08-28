
import axios from "axios";
import { toast } from "react-toastify";

const VERIFY_TOKEN = process.env.REACT_APP_VERIFY_TOKEN;

export async function verifyToken() {

    try {

      const response = await axios.get(VERIFY_TOKEN);
        if (response.status === 200) {
          localStorage.setItem('csrf-token', response.data.csrfToken);
          
          return { success: true, userData: response.data.userData ,message: 'Token verification successful' };
        }
        else {
          return { success: false, message: 'Session Expired, Please Login Again!' };
        }
      }
      catch (err) {
        if(err?.response?.status === 440){
          toast("Session expired, please login to continue");
        }
        else{
          toast("Please Login Again");  
        }
        localStorage.removeItem('csrf-token');
        return { success: false, message: 'Error verifying token,Please Try Again Later!' };
      }

}