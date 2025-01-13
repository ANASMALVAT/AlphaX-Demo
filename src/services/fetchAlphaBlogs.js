import axios from "axios";


export async function fetchAlphaBlog() {

  const ALPHA_BLOG_URL = process.env.REACT_APP_FETCH_ALPHA_BLOG;
  
    try {
        const response = await axios.get(ALPHA_BLOG_URL);
        if (response.status === 200) {
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
      } 
        else {
          return { success: false, message: 'Unable to fetch!' };
        }
      }
      catch (err) {
        return { success: false, message: 'Problem on server!' };
      }

}