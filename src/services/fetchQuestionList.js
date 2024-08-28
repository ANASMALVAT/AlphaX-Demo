import axios from "axios";
const QUESTION_LIST = process.env.REACT_APP_FETCH_QUESTION_LIST;

export async function fetchQuestionList() {

    try {
        const response = await axios.get(QUESTION_LIST);

        const problemList = response.data;

        let returnList = [];

        for(let item in problemList){
                let returnListObject = {};
                Object.keys(problemList[item]).forEach(function(key) {
                     const keyVal = Object.values(problemList[item][key]);
                     returnListObject[key] = keyVal[0];
                });
            returnList.push(returnListObject);
        }
        if (response.status === 200) {
          return returnList;
        }else {
          return { success: false, message: 'Unable to fetch!' };
        }
      }
      catch (err) {
        return { success: false, message: 'Problem on server!' };
      }

}