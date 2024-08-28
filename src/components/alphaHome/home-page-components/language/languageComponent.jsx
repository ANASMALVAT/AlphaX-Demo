import React from "react";
import "./languageComponent.css"
import { languages } from "../../../../data/homeLanguage";
import LanguageCardComponent from "./languageCardComponent";



const LanguageComponent = () => {

    return (
        
        <div className="flex flex-row min-h-[80vh] bg-transparent justify-evenly pt-8 max-w-[1500px] m-auto ">

            <div className="languages  "> 
                <div className="language-header  common-margin-language mb-4">
                <h1 className="language-header-text text-[#F5F5F5]  font-semibold">Type In Four Syntax</h1>
                </div>
                <div className=" language-text common-margin-language mb-10  text-[#F5F5F5] font-light">
                    <h2 className="text-gray-100 language-text text-lg text-left font-light">
                        Diverse selection of Four programming languages. Whether you're a seasoned developer or just starting your coding journey, our comprehensive language offerings have got you covered.
                    </h2>
                </div>
                <div className="language-grid common-margin-language">
                    {
                        languages.map((language) =>{
                            return <LanguageCardComponent language={language} />
                        })
                    }
                </div>
            </div>

            <div className="language-animation">
                <img className="coding-gif" src="https://alpha-images.s3.amazonaws.com/coding-languages.gif" ></img>
            </div>
           
        </div>
    )

}

export default LanguageComponent;
