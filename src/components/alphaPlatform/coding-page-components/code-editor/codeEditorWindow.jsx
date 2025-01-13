import React from "react";
import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import LanguageDropDown from "../drop-downs/languageDropDown";
import SettingsIcon from '@mui/icons-material/Settings';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingSlidingPane from "../sliding-panel/settingSlidingPane";
import ConsoleSlidingPane from "../sliding-panel/consoleSlidingPane";
import MenuIcon from '@mui/icons-material/Menu';
import {useSelector, useDispatch} from "react-redux";
import { defineTheme } from "../../../../data/themeOptions";
import { cancelWindow,maximizeWindow,partialWindow } from "../../../../redux/slices/outputWindowSlice";
import OutputWindowButtons from "../buttons/outputWindowButtons";
import { Link } from "react-router-dom";
import CodeOutput from "./codeOutput";
import Popup from "reactjs-popup";
import "./styles/codeEditorWindow.css";


const CodeEditorWindow = ({onChangeData,code,outputDetail,runCode }) =>
 {
    const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
    const outputWindow = useSelector((state) => state.outputWindow.windowState);
    const [initialValue, setInitialValue] = useState(code);
    const [height, setHeight] = useState(window.innerHeight);
    const [currentFontSize,setFontSize] = useState("16px");
    const [settingPane,setSettingPane] = useState(false);
    const [consolePane,setConsolePane] = useState(false);
    const [currentLanguage,setCurrentLanguagae] = useState(dropdownValue.language);
    const dispatch = useDispatch();

    useEffect(() => {
        setFontSize(dropdownValue.fontSize);
        setCurrentLanguagae(dropdownValue.language);
    }, [dropdownValue.fontSize,dropdownValue.language,dropdownValue.theme]);

    const editorRef = useRef(null);

    const closeSettingPane = () => {
        setSettingPane(false);
    }
    const closeConsolePane = () => {
        setConsolePane(false);
    }

    const openSettingPane = () => {
        setSettingPane(true);
    }
    const openConsolePane = () => {
        setConsolePane(true);
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(()=>{
        let loadThemes = ["brilliance-black","oceanic-next","active4d","blackboard","amy"];
        for(let i in loadThemes){
            defineTheme(loadThemes[i]);
        }
    },[])


    const editorChange = (code) => {
        onChangeData("code",code);
    };

    const makePartialWindow = () => {
        dispatch(partialWindow());
    }
    const makeFullWindow = () => {
        dispatch(maximizeWindow());
    }
    
    const closeWindow = () => {
        dispatch(cancelWindow());
    }

    const handleRestore = () => {
        const currentDropdownLanguage = dropdownValue.language?.value;
        const presentDriverCode = sessionStorage.getItem('driverCode');

        if(presentDriverCode){
          const parsedDriverCode = JSON.parse(presentDriverCode);
          const currentLanguageDriverCode = parsedDriverCode[currentDropdownLanguage]?.M;
          sessionStorage.setItem('user_code',currentLanguageDriverCode.user_code.S);
          onChangeData("code",currentLanguageDriverCode.user_code.S);
        }

    };

    const OriginalResizeObserver = window.ResizeObserver;

    window.ResizeObserver = function (callback) {

        const wrappedCallback = (entries, observer) => {
            window.requestAnimationFrame(() => {
            callback(entries, observer);
            });
        };
        return new OriginalResizeObserver(wrappedCallback);
    };

    useEffect(() => { defineTheme(dropdownValue.theme); }, [dropdownValue.theme]);

    for (let staticMethod in OriginalResizeObserver) {
        if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
            window.ResizeObserver[staticMethod] = OriginalResizeObserver[staticMethod];
        }
    }

    useEffect(() => {
      const handleResize = () => {
        setHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
    <>
        < SettingSlidingPane isOpen={settingPane} onRequestClose={closeSettingPane} />
        < ConsoleSlidingPane isOpen={consolePane} onRequestClose={closeConsolePane} />

        <div className=" relative  code-editor  flex flex-col w-full min-w-[370px] border-4 border-b-0 min-h-screen border-[#1f2937] rounded-lg">
            
            <div className=" flex flex-row justify-between min-w-[385px]  rounded-sm border-4 m-1 border-[#1f2937] h-14 ">

                <div className=" buttons flex  text-center align-center rounded-sm ">


                    <Popup
                        trigger={
                            <button onClick={handleRestore}  className={`button-disappear overflow-hidden mr-2 h-12  flex flex-row items-center border-b-4 border-algoXcolor rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                                <RestoreIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                            </button>
                        }
                        closeOnEscape
                        position={"right center"}
                        on={['hover']}
                        arrow={"right center" !== 'center center'}
                    >
                        <div className='flex  justify-center items-center'>
                            <div class="  border-t-[10px]  border-l-[0px] border-r-[10px] border-b-[10px] w-4 border-transparent border-r-[#4C5ADF]"></div>
                            <div className=' w-32 h-12 bg-[#4C5ADF] flex justify-center items-center rounded-sm ' >
                                <h1 className=' text-white text-[17px]'>Restore Code</h1>
                            </div>
                        </div>
                    </Popup>
                   

                <button  onClick={openSettingPane} className={`  overflow-hidden mr-2 flex h-12 flex-row items-center   border-b-4 border-algoXcolor rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                    <SettingsIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                </button>

                </div>

                <Link to={"/problems"}>
                    <h1 className=" font-semibold text-4xl  text-[#3946ae] hover:duration-300 h-full flex items-center justify-center hover:scale-110">X</h1>
                </Link>

                <div className="language-button ">
                    <LanguageDropDown />
                </div>

                <div className="side-menu-editor flex  text-white ml-8 items-center justify-left p-2">
                    <button  onClick={openConsolePane} >
                        <MenuIcon sx={{fontSize:'28px'}}/>
                    </button>
                </div>

            </div>
            
            <div style={{height:height}} className=" w-full  min-h-screen  flex-grow  min-w-[385px] rounded-md ">
                <Editor
                    height={`100%`}
                    width={`100%`}
                    theme={ dropdownValue.theme}
                    language={currentLanguage.value || "javascript"}
                    onMount={handleEditorDidMount}
                    value={code}
                    onChange={editorChange}
                    options={{fontSize: currentFontSize, borderRadius:"5px",height:"100vh"}}
                />
            </div>

            <div className="flex h-14 p-4 w-full bg-[#00182D] justify-end items-center rounded-[0.25rem]  absolute bottom-0"> 
                <div className=" flex gap-2 ml-2">
                   
                    <button
                        onClick={() => { runCode(true); makePartialWindow();}}
                        className={` ${outputWindow === 'cancel' ? ' z-[1]': 'z-0'}  h-8  overflow-hidden flex flex-row items-center rounded-[4px] px-3 py-2  font-mono text-sm font-normal text-gray-200 bg-[#455B65] sm:text-sm lg:text-md xl:text-md`}
                    > 
                    <h1 className=" text-[12px] font-normal">Compile & Run</h1>
                    </button>
                </div>
            </div>

            <div className={` transition-all visible duration-1000 ${outputWindow === 'cancel' ? ' h-0  invisible ' : outputWindow === 'partial' ? 'h-[40%]' : 'h-[80%]' } absolute bg-transparent w-full m-auto bottom-0 mb-10 p-1 pb-1`}>
                <div className={` visible  output-window-header flex justify-between  h-10 bg-algoblack rounded-t-xl   w-full`}>
                    <OutputWindowButtons makeFullWindow={makeFullWindow} makePartialWindow={makePartialWindow} closeWindow={closeWindow}/>
                </div>
                <div className="flex-grow bg-[#1F2937] h-full w-full  ">
                    <CodeOutput runCode={runCode} outputDetail={outputDetail}/>
                </div>
            </div>
        </div>
    </>
    );

};

export default CodeEditorWindow;