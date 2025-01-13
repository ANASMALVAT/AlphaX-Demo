import axios from "axios";


export async function fetchLoginCredentials() {
  const LOGIN_CREDENTIALS = process.env.REACT_APP_FETCH_LOGIN_CREDENTIALS;
  
    try {
        const response = await axios.get(LOGIN_CREDENTIALS);
        if (response.status === 200) {
          return {success:true, credentials: response.data.credentials}
        }else {
          return { success: false, message: 'Unable to fetch!' };
        }
      }
      catch (err) {
        console.log(err);
        return { success: false, message: 'Problem on server!' };
      }

}