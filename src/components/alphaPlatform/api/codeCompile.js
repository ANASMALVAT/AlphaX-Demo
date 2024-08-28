import axios from "axios";
const CODE_COMPILE_URL = process.env.REACT_APP_CODE_COMPILE_URL;

export const codeCompile = async (code,language,problemId,isRunning) => 
{

    if(code.trim() === ""){
        return {success: false, error: "No Code Is Written!" };
    }

    if(language.value === 'text'){
      return {success: false, error: "White Board Is Enabled!" };
    }

    const custom_testcase = JSON.stringify(sessionStorage.getItem('custom_testcase'));

    const requestData = {
      language_id: language,
      source_code: code,
      custom_testcase,custom_testcase,
      problemId:problemId,
      isRunning:isRunning,
    }

    const config = {
      headers: {
        Authorization: `${localStorage.getItem('csrf-token')}`, 
      },
      withCredentials:true,
    }; 

    try{
      const response = await axios.post(CODE_COMPILE_URL, requestData,config);
      return {success : true, data : response.data.code_output};
    } 
    catch (error) {
      return { success: false, error: "Error compiling code!"};
    }
  }