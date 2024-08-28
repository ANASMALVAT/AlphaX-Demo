import {React} from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./enviormentCardComponent.css"


const EnviormentCardComponent = ({enviorment }) => {
    return(
        <div className=" enviorment-block flex flex-row p-4   ml-auto mr-auto   border border-gray-800 ">
            <div className="flex  flex-col p-2 pl-4 gap-2">
                <h2 className="enviorment-description  text-[#F5F5F5] text-xl" >{enviorment.description}</h2>
                <p className="enviorment-description-sentence cursor-default text-left  font-mon text-slate-400">
                    {enviorment.sentence}
                </p>
            </div>
        </div>
    )
}

export default EnviormentCardComponent;