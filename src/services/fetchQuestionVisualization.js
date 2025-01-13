import axios from "axios";

const QUESTION_VISUALIZATION = process.env.REACT_APP_QUESTION_VISUALIZATION;

export async function fetchQuestionVisualize(question_id) {
    try {
    const config = {
        headers: {
          question_id:question_id
        },
        withCredentials:true,
      };
        const response = await axios.get(QUESTION_VISUALIZATION, config);
        return response;
      }
      catch (err) {
        return err;
      }

}