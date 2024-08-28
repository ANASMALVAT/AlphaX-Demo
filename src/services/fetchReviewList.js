import axios from "axios";

const REVIEW_LIST = process.env.REACT_APP_FETCH_REVIEW_LIST;

export async function fetchReviewList() {

    try {
        const response = await axios.get(REVIEW_LIST);

        const reviewList = response.data;
        console.log("here");

        let returnList = [];

        for(let item in reviewList){
                let returnListObject = {};
                Object.keys(reviewList[item]).forEach(function(key) {
                     const keyVal = Object.values(reviewList[item][key]);
                     returnListObject[key] = keyVal[0];
                });
            returnList.push(returnListObject);
        }
        console.log(reviewList);
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