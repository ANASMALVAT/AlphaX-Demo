import React from "react";
import { alphaFeatures } from "../../../../data/alphaFeatures";
import AlphaCardComponent from "./alphaCardComponent";
// import AlphaGptWindow from "./alphaGptWindow";
import AlphaGPTWindow from "../../../alphaPlatform/coding-page-components/alpha-gpt/alphaGptWindow";
import "./alphaGPT.css"

const AlphaGPT = () => {

    return (
        <div className="alpha flex min-h-[700px] w-screen  flex-1 m-auto bg-[#F5F5F5] justify-evenly pt-4 overflow-visible ">
            <div className=" w-full max-w-[1450px] flex">
                <div className="alpha-grid flex overflow-visisble ">
                    <div className="alpha-img rounded-md">

                        <AlphaGPTWindow className = 'alpha-img' />
                        {/* <AlphaGptWindow className=" alpha-img justify-center rounded-md  p-2 opacity-90" style={{ maxWidth: '90%', height: 'auto' }} /> */}
                    </div>
                </div>

                <div className="div-alpha  flex flex-col " > 
                    <h1 className=" alpha-header common-margin mb-4  text-algoblack font-semibold ">AlphaGPT, Your Coding Assistance</h1>
                    <div className=" alpha-text common-margin mb-8 text-algoblack  ">
                        <h2 className=" alpha-text text-gray-800  font-light text-lg text-justify">
                            Introducing AlphaGPT, your trusted coding companion, specializing in language syntax, code review, and knowledge enrichment.
                        </h2>
                    </div>
                    <div className=" alpha-cards common-margin flex flex-col gap-2">
                        {
                        alphaFeatures.map((value,index) => {
                            return <AlphaCardComponent features={value} />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AlphaGPT;
