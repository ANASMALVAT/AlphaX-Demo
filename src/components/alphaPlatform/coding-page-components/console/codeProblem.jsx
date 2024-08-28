import React, { useEffect,useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/codeProblem.css"

const   CodeProblem = () => {

    const [problemData, setProblemData] = useState(null);

    useEffect(() => {

      const storedProblemData = sessionStorage.getItem(`problemData`);
      if (storedProblemData) {
        try {
          const parsedData = JSON.parse(storedProblemData);
          setProblemData(parsedData);
        } catch (error) {
          console.error("Error parsing stored problemData:", error);
        }
      }

    }, []);
  
    const problemName = problemData?.M?.question_name?.S || "";
    const companies = problemData?.M?.question_companies?.SS || [];
    const problemStatement = problemData?.M?.question_statement.S || "";
    const problemHint = problemData?.M?.hint?.S || "";
    const problemConstraint = problemData?.M?.question_constraints?.M || "";
    const problemTask = problemData?.M?.question_task?.S || "";
    const problemExampleInput = problemData?.M?.example?.M?.input?.S || "";
    const problemExampleOutput = problemData?.M?.example?.M?.output?.S || "";
    const problemVisualization = problemData?.M?.visualization?.S || "";
    const [isHintBlurred, setIsHintBlurred] = useState(true);
    console.log(companies);

    const toggleBlur = () => {
        setIsHintBlurred(!isHintBlurred);
      };

    return (
        <>
            <div className=" code-problem flex flex-col h-full w-full whitespace-pre overflow-auto rounded-md ">
                <div className="">

                    {
                        companies && companies.length > 0 && 
                        <div className=" mb-4">
                        <h2 className=" problem-company text-white text-left ">Companies</h2>
                            <div className=" flex flex-wrap gap-2">
                                {companies.map((company, index) => (
                                    <div key={index} className=" bg-[#1E2663] p-1 px-2 rounded-[0.25rem] text-white">
                                        <h2 className=" text-[14px] font-normal">{company}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                    { problemName &&
                    <div className="flex ">
                        <h2 className="problem-question text-white">{problemName}</h2>
                    </div>
                    }

                    { problemStatement &&
                    <div className=" problem-statement text-justify word-break bg-[transparent] pt-2 pb-2 pr-4  border-t border-b border-gray-700  antialiased" style={{ whiteSpace: 'pre-line' }}>
                        <h2 className=" whitespace-pre-wrap font-light text-[16px] text-justify  tracking-normal text-gray-200 ">{problemStatement}</h2>
                    </div>
                    }

                </div>

                { 
                <div name ="example-1">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Example </h1>
                    <div className="w-full mb-4">
                        <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                            {problemExampleInput}
                        </SyntaxHighlighter>
                    </div>
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Output</h1>
                    <div name="output" className="w-full mb-5">
                        <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                            {problemExampleOutput}
                        </SyntaxHighlighter>
                    </div>
                </div>
                }

                { problemVisualization &&
                
                    <div className="mb-4">
                        <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-4">Visualization </h1>
                        <img src = {problemVisualization} className="rounded-md"></img>
                    </div>
                }

                { problemTask &&
                <div className="mb-2">
                    <div className="flex ">
                    <h1 className=" problem-example text-2xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Your task </h1>
                    </div>
                    <div className=" problem-statement text-justify word-break bg-[transparent] pt-2 pb-2 pr-4  border-t border-b border-gray-700  antialiased" style={{ whiteSpace: 'pre-line' }}>
                        <h2 className=" whitespace-pre-wrap font-light text-[16px] text-justify  tracking-normal text-gray-200 ">{problemTask}</h2>
                    </div>
                </div>
                }
                { problemConstraint?.time_complexity?.S &&
                    <div name = 'constraint' className="mb-4 mt-2  w-full  rounded-md font-mono">
                        <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Expected Time Complexity </h1>
                        <div className=" text-[16px] w-full bg-[#002451]  whitespace-pre-wrap rounded-md pt-4 pb-4 font-mono text-sm antialiased  font-light tracking-normal landing-relaxed text-white">
                                <SyntaxHighlighter language="C#" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                    {problemConstraint?.time_complexity?.S }
                                </SyntaxHighlighter>
                        </div>
                    </div>
                }

                { problemConstraint?.space_complexity?.S &&
                <div name = 'constraint' className="mb-4  w-full  rounded-md font-mono">
                    <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Expected Space Complexity </h1>
                    <div className=" text-[16px] w-full bg-[#002451]  whitespace-pre-wrap rounded-md pt-4 pb-4 font-mono text-sm antialiased  font-normal tracking-normal landing-relaxed text-white">
                            <SyntaxHighlighter language="C#" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                {problemConstraint?.space_complexity?.S }
                            </SyntaxHighlighter>
                    </div>
                </div>
                }

                { problemConstraint?.constraint?.S &&
                <div name = 'constraint' className="mb-4  w-full  rounded-md font-mono">
                    <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Constraints </h1>
                    <div className=" text-[16px] w-full bg-[#002451]  whitespace-pre-wrap rounded-md pt-4 pb-4 font-mono text-sm antialiased  font-normal tracking-normal landing-relaxed text-white">
                            <SyntaxHighlighter language="C#" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                {problemConstraint?.constraint?.S }
                            </SyntaxHighlighter>
                    </div>
                </div>
                }

                {problemHint && (
                    <div className="hint" >
                        <h1 name="example" className="text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Hint</h1>
                            <div name="example" onClick={toggleBlur} className={`mb-4 clickable-div ${isHintBlurred ? 'blurred' : ''} antialiased  whitespace-pre-wrap tracking-normal landing-relaxed text-white mb-2 `}>
                                <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px",paddingTop:"10px",paddingBottom:"10px"}} style={tomorrowNightBlue}>
                                    {problemHint}
                                </SyntaxHighlighter>                         
                            </div>
                    </div>
                )}
        </div>
        </>
    )
}

export default CodeProblem;