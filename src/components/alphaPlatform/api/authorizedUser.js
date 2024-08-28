import axios from "axios";

const AUTHORIZED_USER_URL = process.env.REACT_APP_AUTHORIZE_USER_URL;

export async function authorizedUser(question_id) {
  console.log(question_id);
    const config = {
        headers: {
            question_id: question_id
          },
        }
        const response = await axios.get(AUTHORIZED_USER_URL,config);
        console.log(response);
        return response;
};