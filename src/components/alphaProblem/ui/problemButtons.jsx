import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { changeTypeFalse,changeTypeTrue } from '../../../redux/slices/problemTypeSlice';


const ProblemButtons = () => {

    const problemCategoryType = useSelector((state) => state.problemType.difficulty);

    const [isDifficulty,setDifficulty] = useState(problemCategoryType);
    const [isRandom,setRandom] = useState(!problemCategoryType);
    const dispatch = useDispatch();

    const setDifficultyTrue = () => {
        setDifficulty(isDifficulty => true);
        setRandom(isRandom => false);
        dispatch(changeTypeTrue());
    }

    const setRandomTrue = () =>{
        setDifficulty(isDifficulty => false);
        setRandom(isRandom => true);
        dispatch(changeTypeFalse());
    }

    return <>
    <div className=' flex gap-8 '>
        <button onClick={setDifficultyTrue}  className={` ${isDifficulty ? "bg-[#F5F5F5]" : "bg-transparent"} text-algoblack  px-4 py-2 rounded-md text-lg  font-semibold`}><h1> Difficulty</h1></button>
        <button onClick={setRandomTrue} className={`${isRandom ? "bg-[#F5F5F5]" : "bg-transparent"} text-algoblack px-4 py-2 rounded-md  text-lg font-semibold`}><h1> Random</h1></button>

    </div>
    </>

}

export default ProblemButtons;