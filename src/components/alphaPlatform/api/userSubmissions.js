import axios from "axios"

export async function getUserSubmission(question_id) {
    const USER_SUBMISSION_URL = process.env.REACT_APP_FETCH_USER_SUBMISSION;

    const config = {
        headers: {
          Authorization: `${localStorage.getItem('csrf-token')}`, 
        },
        withCredentials:true,
      }; 


    try {
      const response = await axios.get(`${USER_SUBMISSION_URL}?questionId=${question_id}`, config);
      return response;
      }
      catch (err) {
        // toast("Error in displaying your submission!")
        return { success: false, message: 'Error verifying token,Please Try Again Later!' };
      }
}