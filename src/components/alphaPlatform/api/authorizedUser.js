import axios from "axios";

const AUTHORIZED_USER_URL = process.env.REACT_APP_AUTHORIZE_USER_URL;

export async function authorizedUser(question_id) {
  
    const config = {
        headers: {
            Authorization: `${localStorage.getItem('csrf-token')}`, 
            question_id: question_id
          },
          withCredentials:true,
        }
        const response = await axios.get(AUTHORIZED_USER_URL,config);
        return response;
};