import React from "react";
import QuestionAnimationComponent from "./questionAnimationComponent";
import QuestionCardComponent from "./questionCardComponent";
import "./questionComponent.css"



const QuestionComponent = () => {

    return (
        <div className=" question-main flex relative flex-row overflow-hidden min-h-[600px] flex-1 bg-transparent justify-center items-center pt-2  ">
            <div className=" absolute w-24 h-24 rounded-md flex bg-algoXcolor m-auto  items-center justify-center  mr-4 text-center z-[100]  question-animation">
                <h2 className="tracking-wide font-bold antialiased text-gray-200 opacity-90 text-7xl">X</h2>
            </div>
            <div className="w-[50%] h-[400px]  bg-transparent question-animation ">
                <div className="z-0 question-flow flex gap-2 h-full overflow-hidden  rounded-r-full bg-algoblack   ">
                    < QuestionAnimationComponent className="start-data" />
                </div>
            </div>
            <div className="  bg-transparent question-card">
                <QuestionCardComponent />
            </div>
        </div>
    )

}

export default QuestionComponent;