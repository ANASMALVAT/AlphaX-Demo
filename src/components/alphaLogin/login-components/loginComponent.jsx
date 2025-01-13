import React, { useEffect, useLayoutEffect, useState }  from 'react'
import {GoogleLogin} from "react-google-login";
import GitHubLogin from 'react-github-login';
import { userAuthenticationGoogle } from '../../../services/userAuthenticationGoogle';
import { userAuthenticationGithub } from '../../../services/userAuthenticationGithub';
import {GithubLoginButton} from 'react-social-login-buttons'
import { toast } from 'react-toastify';
import { gapi } from 'gapi-script';
import {  useSelector } from 'react-redux';

const LoginComponent = () => {

  const githubRedirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URL;
  const loginCredentials = useSelector((state) => state.loginCredentials.loginCredentials);



  const setCookieAndToken = (response) => {
    window.localStorage.setItem('csrf-token',response.data.csrfToken);
    window.location.reload();
  }

  const onGoogleSuccess = async (res) => {
    const token = res.tokenObj;
    const response = await userAuthenticationGoogle(token.access_token, token.id_token);
    if(response.success){
      setCookieAndToken(response.response);
    }
    else{
      toast("Error occured during login!")
    }
  }

  const onGoogleFailure = (res) => {
    if(res.error != "popup_closed_by_user"){
      toast("Error occured during login!")
    }
  }

  const onGithubSuccess = async (res) => {
    const code = res.code;
    const response = await userAuthenticationGithub(code);
    if(response.success){
      setCookieAndToken(response.response);
    }
    else{
      toast("Error occured during login!")
    }
  }

  const onGithubFailure = (res) => {
    if(res.error != "popup_closed_by_user"){
      toast("Error occured during login!")
    }  
  }

  function startGoogle(){
        if(loginCredentials.google_id){
            gapi.client.init({
                clientId: loginCredentials?.google_id,
                scope:""
            })
        }
  }

  const loadGoogleapi = () => {
    if(loginCredentials?.google_id){
        gapi.load('client:auth2',startGoogle);
    }
  }

    if(!loginCredentials?.google_id || !loginCredentials?.github_id){
      return <>
            </>
    }

    return (
        
        <div className=' flex flex-col rounded-lg   bg-[#FFFFFF] h-[325px] w-[300px] border-t-[5px] border-[#626EE3] '>
                <div className=' !font-thin w-[225px] mx-auto mt-12  h-1/4 flex flex-col text-left justify-center '>
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                    Sign in to Alpha Algo
                  </h1>
                </div>

                <div className=' flex mb-4 flex-col justify-center items-center mt-2 gap-2 rounded-md h-full'>
                  { 
                  // loginCredentials?.google_id &&
                  // <GoogleLogin
                  //     className=' w-[225px] m-auto  font-semibold text-center placeholder:font-semibold text-white placeholder-gray-200::placeholder	'
                  //     clientId={loginCredentials?.google_id}
                  //     onSuccess={onGoogleSuccess}
                  //     onFailure={onGoogleFailure}
                  //     cookiePolicy='single_host_origin'
                  //     onClick={loadGoogleapi}
                  //     >
                  //     <span className='text-gray-800 font-normal  text-[16px] ml-1'>Google</span>
                  // </GoogleLogin>
                  }
                  {
                  loginCredentials?.github_id &&
                  <GitHubLogin 
                    clientId={loginCredentials?.github_id}
                    redirectUri={githubRedirectUri}
                    onSuccess={onGithubSuccess}
                    onFailure={onGithubFailure} >
                      <GithubLoginButton style={{background:"black",color:"white",height:"45px",width:"225px",fontSize:"15px"}}  iconColor='white' className='  !hover:bg-black' >
                          <span className='text-gray-100 font-normal  text-[16px] ml-2'>GitHub</span>
                      </GithubLoginButton>
                  </GitHubLogin>
                  }
                </div>
        </div>
    )

}


export default LoginComponent;