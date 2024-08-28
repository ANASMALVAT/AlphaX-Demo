import {React} from "react";
import QuestionCardGrid from "./questionCardGrid";
import { questionCategory } from "../../../../data/homeQuestion";
import "./questionCardComponent.css"

const QuestionCardComponent = () => {
    return(
        <div className="div-question  flex flex-col ">
            <div className="question-header common-margin-question mb-4">
                <h1 className="question-header-text text-[#F5F5F5] font-semibold">Practice Algorithmic Questions</h1>
            </div>

            <div className=" question-text common-margin-question mb-10">
                <h2 className=" text-gray-300  question-text text-lg font-normal">
                    we've compiled an extensive array of commonly posed questions in the realm of tech interviews. Explore the various concepts!
                </h2>
            </div>
            <div className=" question-cards  common-margin-question flex flex-wrap gap-3">
                {
                    questionCategory.map((category) => {
                        return <QuestionCardGrid feature={category.description}/>
                })
                }
            </div>

        </div>
    )
}

export default QuestionCardComponent;