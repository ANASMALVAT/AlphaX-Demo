import React from "react";
import Typewriter from 'typewriter-effect';
import "./styles/componentTypeWriter.css"

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>

const componentTypeWriter = () => 
{
    const code = [
        "  function bubbleSort(arr) {",
        "    const n = arr.length;",
        "",
        "     for (let i = 0; i < n - 1; i++) {",
        "       for (let j = 0; j < n - 1 - i; j++) {",
        "         if (arr[j] > arr[j + 1]) {",
        "           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];",
        "         }",
        "       }",
        "     }",
        "",
        "    return arr;",
        "  }",
      ];

    const formattedCode = code.join('\n');
 
    return (
        <>

        <div
            style={{  whiteSpace: 'pre',
            scrollbarWidth: 'thin',
            scrollbarColor: '#4C5ADF #011627',
            fontFamily: 'monospace',
            fontSize: '14px',
            fontColor: 'rgb(55,65,81)',
            zIndex:"1"

            }}
            className="algo-screen  overflow-hidden min-w-[625px]  w-[625px] h-[375px]  mr-6 border text-white rounded-[0.25rem] border-gray-900 bg-[#011627] text-left">

                <div className="flex flex-row m-auto  text-center overflow-hidden items-center  w-full justify-center border-b border-gray-800 mb-2">
                    <h1 className=" font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                    <h1 className=" font-mono   font-semibold  text-algoXcolor text-[42px] ">X</h1>
                    <h1 className="font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                </div>

                <pre className="m-auto ml-10 text-gray-300">
                    <Typewriter
                        options={{
                            strings:formattedCode,
                            autoStart:true,
                            delay:1,
                            deleteSpeed:1,
                            loop:true
                    }}
                    />
                </pre>

            </div>
        </>
    )
}

export default componentTypeWriter;