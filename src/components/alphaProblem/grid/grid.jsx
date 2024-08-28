import React, { useState }  from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import ProblemVisualization from '../ui/problemVisualization';
import { fetchQuestionVisualize } from '../../../services/fetchQuestionVisualization';
import { toast } from "react-toastify";
import "./styles/grid.css"


const Grid = ({problemInfo, isUserLoggedIn, isProblemSolved}) => {

    const problemCategoryType = useSelector((state) => state.problemType.difficulty);
    const[questionVisualizationData,setQuestionVisualizationData] = useState(null);
    const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);
    const [open,setOpen] = useState(false);
    

    const  loginNotification= (notification) => {
        toast.success(notification, {
          position:"bottom-center",
          autoClose:7000,
          hideProgressBar:true, 
          newestOnTop:false,
          theme:"dark",
        });
      };

    const showVisualization = async () => {
        setOpen(true);
        const questionVisualizationDetail = await fetchQuestionVisualize(problemInfo?.question_id);
        try{
            if(questionVisualizationDetail?.data?.success){
                setQuestionVisualizationData(questionVisualizationDetail.data.question_visualize);
            }else{
                setQuestionVisualizationData("Unauthorized");
            }
        }
        catch(err){
            loginNotification("Alpha Visualization is under maintainence!");
        }
        
    }


    return(
        
        <div className=' problem-grid  flex flex-row items-center justify-between h-12 pl-3 shadow-md rounded-sm bg-[#F5F5F5]'>
            <ProblemVisualization open={open} setOpen={setOpen} questionVisualizationData={questionVisualizationData} />
            {
                isUserLoggedIn && isProblemSolved &&
                <Popup
                trigger={
                    <div className=' w-5 h-5  rounded-full border border-gray-300 bg-green-700'>
                    </div>
                    }
                    closeOnEscape
                    position={"top center"}
                    on={['hover']}
                    arrow={"top center" !== 'center center'}
                >
                    <div className='flex flex-col justify-center items-center'>
                        <div className=' w-32 h-10 bg-algoblack flex justify-center items-center rounded-sm ' >
                            <h1 className=' text-white'>Solved</h1>
                        </div>
                        <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-algoblack"></div>
                    </div>
                </Popup>
            }

            {
                isUserLoggedIn && !isProblemSolved &&
                <Popup
                trigger={
                    <div className=' w-5 h-5  rounded-full border border-gray-300 bg-transparent'>
                    </div>
                }
                closeOnEscape
                position={"top center"}
                on={['hover']}
                arrow={"bottom center" !== 'center center'}
              >
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-32 h-10 bg-algoblack flex justify-center items-center rounded-sm ' >
                        <h1 className=' text-white'>No Submission</h1>
                    </div>
                    <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-algoblack"></div>
                </div>
              </Popup>
            }
            
            {
                !isUserLoggedIn && !isProblemSolved && <></>
            }

            <Link to={`/problems/${problemInfo?.question_id}`}>
                <div className='problem-name mr-3 ml-3 font-normal text-gray-900'>
                    <a>{ !problemCategoryType ? "Anonymous" :  problemInfo?.question_name}</a>
                </div>
            </Link>

            {
                problemInfo?.visualize &&
                <Popup
                trigger={
                    <button onClick={showVisualization} className='px-2 flex justify-center items-center  hover:scale-[1.2] hover:duration-200 rounded-full bg-[#626EE3] mr-3'>
                        <h2 className=' text-lg  text-white font-normal'>V</h2>
                    </button>
                }
                closeOnEscape
                position={"top center"}
                on={['hover']}
                
                arrow={"bottom center" !== 'center center'}
            >
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-32 h-10 bg-[#626EE3] flex justify-center items-center rounded-sm ' >
                        <h1 className=' text-white'>visualize</h1>
                    </div>
                    <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-[#626EE3]"></div>
                </div>
          </Popup>
            }
            {  
                !problemCategoryType ? <div  className='h-4 w-4'></div>
                : problemInfo?.isFree && 
                <img src='https://alpha-images.s3.amazonaws.com/free.png' className='h-8 w-8 mr-4'></img>
            }

            {
                !problemCategoryType ? 
                <h1 className=" font-mono   font-bold  text-[#2D33CA] text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4 w-4"></h1>
                :  problemInfo?.question_difficulty === 'special' &&
                <h1 className=" font-mono   font-bold  text-[#2D33CA] text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4">X</h1>
            }

            <div className={` flex ${ !problemCategoryType ? "bg-gray-400" :  problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } h-full rounded-r-md `}>
                <div className={`flex items-center justify-center ${ !problemCategoryType ? "bg-gray-400" : problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-300' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-400' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-500' : 'bg-purple-500'} rounded-r-lg  first-letter: items-end w-8 h-full`}>
                </div>
                <div className={`${ !problemCategoryType ? "bg-gray-400" : problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } items-end w-3 h-full rounded-r-md  `}>
                </div>
            </div>
        </div>
        
    )

}

export default Grid;