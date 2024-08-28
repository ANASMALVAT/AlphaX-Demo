import React, { memo,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handle, Position } from 'reactflow';
import Popup from 'reactjs-popup';


function CustomNode({ data }) {

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const difficulty  = data.question_difficulty;
  const userCompletedProblems = sessionStorage.getItem('user_completed_problems') || [];
  const difficulty_color = difficulty === 'easy' ? 'bg-yellow-400' : 
    difficulty === 'medium' ? 'bg-orange-400' :
    difficulty === 'hard' ? 'bg-red-400' :
    difficulty === 'special' ? 'bg-purple-400':
    'bg-teal-300';


  return (
    <div className=" flex h-12 justify-center items-center rounded-[0.25rem]  bg-[#f5f5f5]  shadow-2xl ">
      <div className=" px-4 py-2 flex justify-center items-center gap-3 h-full w-52   border-2 border-r-0 border-stone-400">
        <div className=''>
              <Popup
                trigger={
                    <div className={`rounded-full w-5 h-5 mr-2 flex justify-center items-center cursor-default  ${userCompletedProblems.includes(data.question_id) ? 'bg-green-400' : 'bg-orange-400'} `}> </div>
                    }
                    closeOnEscape
                    position={"top center"}
                    on={['hover']}
                    arrow={"top center" !== 'center center'}
                >
                    <div className='flex flex-col justify-center items-center '>
                        <div className=' w-32 h-10 bg-algoblack flex justify-center items-center rounded-sm ' >
                            <h1 className=' text-white'>{userCompletedProblems.includes(data.question_id) ? 'Solved' : 'No submission'} </h1>
                        </div>
                        <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-algoblack"></div>
                    </div>
              </Popup>
        </div>

        <div className="flex justify-center items-center text-algoblack ">
            <div  className="text-lg font-bold hover:text-[#4c5adf]">{data.question_name}</div>
        </div>
      </div>

      <Popup
        trigger={
          <div className={`w-4 h-full rounded-r-[0.25rem] ${difficulty_color} `}>
          </div>                    
          }
            closeOnEscape
            position={"top center"}
            on={['hover']}
            arrow={"top center" !== 'center center'}
        >
            <div className='flex flex-col justify-center items-center '>
                <div className=' w-32 h-10 bg-algoblack flex justify-center items-center rounded-sm ' >
                    <h1 className=' text-white'>{difficulty || 'curent'}</h1>
                </div>
                <div class="  border-t-[10px]  border-l-[10px] border-r-[10px] border-b-[0px] w-4 border-transparent border-t-algoblack"></div>
            </div>
      </Popup>

      <Handle type="target" position={Position.Top} className="w-16 h-4 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 h-4 !bg-teal-500" />
    </div>
  );
}

export default memo(CustomNode);
