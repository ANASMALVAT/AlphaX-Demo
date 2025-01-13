import React from "react";
import { useState, useEffect } from "react";
import ToolTip from "./tooltip";
import Popup from 'reactjs-popup';
import {toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggelLoginWindowTrue } from "../../redux/slices/userLoginWindow";
import { showNotification } from "../../redux/slices/alphaNotification";
import { useLogout } from "../../utils/logout";
import ProfileTooltip from "./profileTooltip";
import { user_profile } from "../../utils/constants";

import "../navbar/styles/AlphaNavbar.css"

const AlphaNavbar  = () => {
    const logout = useLogout();
    const dispatch = useDispatch();
    const [showLoginButton, setShowLoginButton] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);
    const AlphaNotification = useSelector((state) => state.alphaNotification);
    const AlphaUser = useSelector((state) => state.alphaUser.alphaUser);
    const [userProfile,setUserprofile] = useState(user_profile)

    useEffect(() => {
        setUserprofile(AlphaUser?.user_profile);
    },[AlphaUser])

    useEffect(()=>{
      if(AlphaNotification.Notification != ""){
        toast(AlphaNotification.Notification);
        setTimeout(() => {
            dispatch(showNotification({ Notification: "" }));
          }, 3000);
      }
    },[AlphaNotification.Notification]);


    setTimeout(() => {
        setShowLoginButton(true);
      }, 1000);

    const showLogin = () => {
        dispatch(toggelLoginWindowTrue());
    }


    return (
        <>
        <div className=" w-full bg-[#00182D] ">
            <footer class="bg-transparent shadow dark:bg-gray-900 ">
                <div class="w-full max-w-screen-xl mx-auto p-4 px-6 gap-4">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div className=" max-w-[80px] min-w-[80px] mb-8 justify-center  text-center  align-bottom items-center  overflow-hidden">
                            <div className=" logo flex flex-row justify-center">
                                <h1 className="  flex  items-center tracking-wide font-normal antialiased text-[white] text-2xl  text-center">A</h1>
                                    <Link
                                    to="/"
                                    className="tracking-wide font-bold antialiased text-algoXcolor text-5xl hover:duration-[1500ms] hover:rotate-[360deg]"
                                    >
                                    X
                                    </Link> 
                                <h1 className="flex items-center  tracking-wide font-normal antialiased text-[white] text-2xl text-center">A</h1>
                            </div>
                        </div>

                        <ul class="flex flex-wrap gap-2  items-center mb-2 text-sm font-medium cursor-pointer text-white sm:mb-0 mr-12    dark:text-gray-400">
                            <Popup
                                trigger =
                                {
                                    <li class="hover:underline me-8 md:me-8">
                                        Products
                                    </li>
                                }
                            
                                on={['hover', 'focus']}
                                position={'bottom left'}
                                contentStyle={{minWidth:"250px", width:"250px",height:"200px",flexGrow : 1, borderRadius:"4px",zIndex:"1001",background:"transparent",border:"none"}}
                                >   
                                <ToolTip />
                            </Popup>
                            <Link to={"/purchase"}>
                                <li>
                                    <a href="/purchase" class="hover:underline me-4 md:me-4">Pricing </a>
                                </li>
                            </Link>
                            <li>
                                    <a href="#" class="hover:underline me-3 md:me-3"></a>
                            </li>
                            <li>
                                { !showLoginButton && <div  className="w-[70px]  h-full justify-center align-bottom text-center opacity-0"></div> }
                                
                                {
                                showLoginButton && 
                                (
                                    IsUserLoggedIn ? 
                                    (
                                        <Popup
                                        trigger =
                                        {
                                            <div onClick={() => setIsOpen(true)} id="logout" className="w-[70px] mt-2  text-center hover:scale-110 hover:transition-transform  hover:duration-200  pb-1 items-center min-w-[40px] flex gap-3 h-full justify-center align-bottom text-center">
                                                <img src={userProfile} className=" flex justify-center  rounded-full " width={26} height={26}></img>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 292.362 292.362" className=" h-2 w-2">
                                                    <path d="M286.935 69.377q-5.422-5.425-12.848-5.424H18.274q-7.426 0-12.85 5.424Q-.001 74.807 0 82.228t5.424 12.847l127.907 127.907q5.43 5.427 12.85 5.428c7.42.001 9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847s-1.814-9.229-5.427-12.85"></path>
                                                </svg>
                                            </div>
                                        }
                                        open={isOpen}
                                        position={'bottom center'}
                                        contentStyle={{minWidth:"250px", width:"250px",height:"200px",flexGrow : 1, borderRadius:"4px",zIndex:"1001",background:"transparent",border:"none",outline:"none"}}
                                        >
                                        <ProfileTooltip  setIsOpen={setIsOpen} logout={logout}/>
                                    </Popup>
                                    )
                                    :
                                    (
                                        <div id="login" className=" w-[70px]  h-full justify-center align-bottom text-center">
                                            <button onClick={showLogin} className="login-ul flex h-full w-[50px] flex-row hover:duration-100 text-white justify-between p-2 items-center text-center">
                                                <div className=" hover:underline text-[16px]" href="#">
                                                    <h1>Login</h1>
                                                </div>
                                            </button>
                                        </div>
                                    )
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default AlphaNavbar;