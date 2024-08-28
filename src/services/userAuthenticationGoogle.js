import axios from "axios";

const USER_AUTHENTICATION = process.env.REACT_APP_USER_AUTHENTICATION_GOOGLE;

export async function userAuthenticationGoogle(access_token,id_token) {

    if(!access_token || !id_token){
      return { success: false };
    }

    try {
       
        const config = {
          withCredentials:true,
        };
        const url = `${USER_AUTHENTICATION}?access_token=${access_token}&id_token=${id_token}`
        const response = await axios.get(url, config);
        return {success:true,response:response};
      }
      catch (err) {
        console.log(err);
        return { success: false, message: 'Problem on server!' };
      }

}