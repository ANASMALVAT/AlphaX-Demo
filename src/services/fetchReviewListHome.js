import axios from "axios";

const REVIEW_LIST_HOME = process.env.REACT_APP_FETCH_REVIEW_LIST_HOME;

export async function fetchReviewListHome() {

    try {
        const response = await axios.get(REVIEW_LIST_HOME);

        const reviewList = response.data;

        let returnList = [];

        for(let item in reviewList){
                let returnListObject = {};
                Object.keys(reviewList[item]).forEach(function(key) {
                     const keyVal = Object.values(reviewList[item][key]);
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