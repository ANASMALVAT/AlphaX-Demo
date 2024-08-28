import {React} from "react";
import "./languageCardComponent.css"


const LanguageCardComponent = ({language}) => {
    return(
        <div className="flex flex-row language-block">
            <div className="language-img">
                {language.img}
            </div>
            <div className="flex">
                <h2 className="language-name text-xl text-white ml-3 mr-1 ">{language.language}</h2>
                <p className="language-description text-gray-200 font-light" >{language.description}</p>
            </div>
        </div>
    )
}

export default LanguageCardComponent;