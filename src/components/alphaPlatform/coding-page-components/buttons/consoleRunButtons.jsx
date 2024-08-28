import React from "react";
import { useSelector } from "react-redux";

const ConsoleRunButtons = ({runCode}) => {

    function compileCode(runcode)  {
        runCode(runcode);
    }

    return (
        <>
            <div className="flex flex-row  bottom-0 mb-3 w-full gap-2">
                    <button
                        onClick={() => { compileCode(true)}}
                        className={` h-8  overflow-hidden flex flex-row items-center rounded-[4px] px-3 py-2  font-mono text-sm font-normal text-gray-200
                        bg-[#455B65]
                        sm:text-sm lg:text-md xl:text-md`}
                    > <h1 className=" text-[12px] font-normal">Compile & Run</h1></button>
                    <button 
                        onClick={() => { compileCode(false)}}
                        className={` h-8  overflow-hidden flex flex-row items-center rounded-[4px] px-3 py-2  font-mono text-sm font-normal text-gray-200
                        bg-[#2F8D46]
                        sm:text-sm lg:text-md xl:text-md`}
                    > <h1 className=" text-[12px] font-normal">Submit</h1></button>
            </div>
        </>
    )
}

export default ConsoleRunButtons;