import axios from "axios";
import { toast } from "react-toastify";

export async function purchaseAlpha(priceId)
  {

    try {
      const requestData = {
        price_id : priceId
      }

      const response = await axios.post(process.env.REACT_APP_PURCHASE_URL, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem('csrf-token')}`, 
        },
        withCredentials:true
      });
      if (response.data && response.data.url) {
        window.location.href = response.data.url;
      } 
    } catch (error) {
        toast("Some error occured, please try again later!");
    }
  }