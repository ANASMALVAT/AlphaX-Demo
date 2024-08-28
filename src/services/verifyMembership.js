import axios from "axios";
import { toast } from "react-toastify";

const VERIFY_MEMBERSHIP = process.env.REACT_APP_VERIFY_MEMBERSHIP;

export async function verifyMembership() {
  
   
    try {
      const response = await axios.get(VERIFY_MEMBERSHIP);
      return response;
      }
      catch (err) {
        console.log(err);
        if(err?.response?.status === 500){
          toast("");
        }
        return { success: false };
      }

}