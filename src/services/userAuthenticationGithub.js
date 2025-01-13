import axios from "axios";
import { toast } from "react-toastify";

const USER_AUTHENTICATION = process.env.REACT_APP_USER_AUTHENTICATION_GITHUB;

export async function userAuthenticationGithub(code) {

    if(!code){
      return { success: false };
    }

    try {
        const config = {
          withCredentials:true,
        };
        const url = `${USER_AUTHENTICATION}?code=${code}`
        const response = await axios.get(url, config);
        return {success:true,response:response};
      }
      catch (err) {
        toast("problem on server");
        return { success: false, message: 'Problem on server!' };
      }

}