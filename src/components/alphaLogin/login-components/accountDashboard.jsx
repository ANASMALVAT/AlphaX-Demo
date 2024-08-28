import React,{ useState, useLayoutEffect, useEffect }  from 'react'
import AlphaNavbar from '../../../layouts/navbar/AlphaNavbar';
import AlphaFooter from '../../../layouts/footer/AlphaFooter';
import { useSelector, useDispatch} from 'react-redux';
import { fetchQuestionList } from '../../../services/fetchQuestionList';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { toggelLoginWindowTrue } from '../../../redux/slices/userLoginWindow';
import { useLogout } from '../../../utils/logout';
import { user_profile } from '../../../utils/constants';

const AccountDashboard = () => {

    const logout = useLogout();
    const MANAGE_PLAN_URL = process.env.REACT_APP_MANAGE_PLAN;
    const AlphaUser = useSelector((state) => state.alphaUser.alphaUser);
    const AlphaPremiumUser = useSelector((state) => state.alphaPremiumUser.alphaPremiumUser);
    const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);
    const sessionData = sessionStorage.getItem('user_completed_problems');
    const userCompletedProblems = sessionData ? JSON.parse(sessionData).length : 0;
    const [totalProblems, setTotalProblems] = useState(0);
    const [userProfile,setUserprofile] = useState(user_profile);

    useEffect(() => {
        setUserprofile(AlphaUser?.user_profile);
    },[AlphaUser])

    const dispatch = useDispatch()

    const showLogin = ()  => {
        dispatch(toggelLoginWindowTrue());
    }

    useLayoutEffect (() => { 
        fetchQuestionList()
        .then(questionList => { 
          setTotalProblems(totalProblems => questionList.length);
        })
        .catch(error=> {console.log("Error")})
      },[])
    
    

    if(!IsUserLoggedIn){
        {
        return (
            <>
            <AlphaNavbar/>
            <div className=' bg-white h-screen flex justify-center items-center'>
                <h1 className=' flex text-gray-400 text-xl'>Please <h2 onClick={showLogin} className=' text-[#626EE3] border-b-2 text-xl hover:border-b-2 hover:border-[#626EE3] hover:duration-200 mx-2 cursor-pointer'> Log in </h2> to access account dashboard. </h1>
            </div>
            <AlphaFooter/>
            </> 
            )
        }
    }

    return <>
    <AlphaNavbar />
    <div className=' flex flex-col justify-top  min-h-screen  max-w-[1400px] m-auto px-4 mt-20 mb-10 '>
        <div className=' flex  flex-wrap xl:flex-row  justify-center w-full  gap-6  '>
            <div className=' profile-information flex flex-col gap-6  justify-center  mb-8'>

                <div className= ' flex  flex-col w-full items-start justify-start  rounded-lg border border-gray-300 min-w-[370px] max-w-[600px] md:w-[500px] lg:w-[600px] xl:w-[600px]  h-[460px] sm:h-[425px]  px-4 '>
                    
                    <div  className=" pb-1  items-center min-w-[80px] flex gap-3 h-[125px] justify-left align-bottom text-center ">
                        <img src={userProfile} className=" flex justify-left  rounded-full " width={80} height={80}></img>
                        <div className=' flex flex-col text-left'>
                            <h1 className=' text-4xl'>{AlphaUser.user_name}</h1>
                        </div>
                    </div>

                    <div className=' account-detail mt-4 bg-[#EDF2F7] rounded-md p-2 '>
                        <div className=' flex  items-start text-justify pr-3  justify-start mt-4 flex-col'>
                            <span className=' font-normal text-lg   rounded-md text-zinc-900' >
                                <h1>
                                    Alpha Algo collects only the necessary personal information. This information is stored solely for professional purposes and is not shared with any third parties.
                                </h1>
                            </span>
                            <span className=' font-normal  text-lg  mt-2 rounded-md text-zinc-900' >
                                <h1>
                                    Alpha Algo may email users for product advertisements and updates.
                                </h1> 
                            </span>
                        </div>
                    </div>
                    <div onClick={() => logout()} className=' flex justify-center items-center h-10 w-28 rounded-md mt-6 ml-auto mr-3  bg-[#626EE3] text-white'>
                        <h1  className=' text-[18px] font-normal '>Logout</h1>
                    </div>
                </div>  

                { AlphaPremiumUser &&  Object.keys(AlphaPremiumUser).length > 0 &&
                <div className= ' flex  flex-col  items-start justify-start pt-4  rounded-lg border min-w-[370px] border-gray-300 max-w-[600px] md:w-[500px] lg:w-[600px] xl:w-[600px] h-[200px] px-4 '>
                    <div className=' w-full h-full'>
                        <div className=' mt-4 flex items-start px-3 py-3 w-full   justify-between rounded-md  bg-[#EDF2F7]' >
                            <div className='  flex flex-col justify-center items-center gap-1'>
                                <h2 className='flex text-xl font-normal h-10 mt-1 my-auto text-center items-center'>
                                    Manage your plan
                                </h2>
                            </div>
                            <div onClick={() => window.open(MANAGE_PLAN_URL,"_blank")}  className='h-14  rounded-md flex justify-center text-center items-center '>
                                <button  className=' flex justify-center items-center h-10 w-28 rounded-md  bg-[#626EE3] text-white'>
                                    <h1>manage</h1>
                                    <ArrowForwardIcon />
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
                }
            </div>
            
            <div className= ' flex  flex-col  items-start justify-start pt-4  rounded-lg border min-w-[370px] w-full border-gray-300 max-w-[600px] md:w-[00px] lg:w-[600px] xl:w-[600px] h-[300px] px-4 '>
                    <div className=' w-full h-full'>
                        <div className=' flex gap-4' >
                            <svg    className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="2 0 25 30" ><path d="M24.97 16.5H5.03c-1.12 0-2.03.91-2.03 2.03v4.28c0 1.12.91 2.03 2.03 2.03h19.94c1.12 0 2.03-.91 2.03-2.03v-4.28c0-1.12-.91-2.03-2.03-2.03m-14.55 6.34H6c-.55 0-1-.45-1-1V19.5c0-.55.45-1 1-1h4.42zM24.97 5.16H5.03C3.91 5.16 3 6.07 3 7.19v4.28c0 1.12.91 2.03 2.03 2.03h19.94c1.12 0 2.03-.91 2.03-2.03V7.19c0-1.12-.91-2.03-2.03-2.03m-8.4 6.34H6c-.55 0-1-.45-1-1V8.16c0-.55.45-1 1-1h10.57z"></path></svg>
                            <h1 className=' font-normal text-2xl'>Progress</h1>
                        </div>
                        <div className=' mt-8 flex items-start px-3 py-3 w-full  justify-between rounded-md  bg-[#EDF2F7]' >
                            <div className='  flex flex-col justify-center gap-4'>
                                <h2 className='flex text-2xl font-normal h-10 text-center items-center'>
                                        Alpha Problems
                                </h2>
                                <div className='h-12  rounded-md flex justify-center text-center bg-white w-28'>
                                    <h1 className=' w-full h-full text-2xl   flex justify-center items-center'>{userCompletedProblems} / {totalProblems}</h1>
                                </div>
                            </div>
                        
                            <div className='h-12  rounded-md flex justify-center text-center w-28'>
                                <Link to={"/problems"}>
                                    <button className=' flex justify-center items-center h-10 w-24 rounded-md gap-2 bg-[#626EE3] text-white'>
                                        <h1>view</h1>
                                        <ArrowForwardIcon />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div> 
                </div>

        </div>
    </div>
    <AlphaFooter />
    </>
}

export default AccountDashboard;