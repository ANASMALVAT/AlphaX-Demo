import axios from "axios"

export async function setUserCodeCompletion(question_id) {
    const CODE_COMPLETION_URL = process.env.REACT_APP_USER_CODE_COMPLETION;

    const config = {
        headers: {
          Authorization: `${localStorage.getItem('csrf-token')}`, 
        },
        withCredentials:true,
      }; 

      const requestData = {
        problemId: question_id
      }

    try {
      const response = await axios.post(CODE_COMPLETION_URL,requestData,config);
      console.log(response);
      return response;
      }
      catch (err) {
        return { success: false, message: 'Error in user code completion update!' };
      }
}