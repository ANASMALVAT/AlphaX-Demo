import React from "react";
import { Link } from "react-router-dom";
import ToolTip from "./tooltip";
import Popup from 'reactjs-popup';
import "./styles/navLinks.css"

const NavLinks = ({flexClass}) => {

    return (
        <>
           <div className="  w-full flex justify-center m-auto ">

                <ul className = {`nav flex h-full w-full ${flexClass} hover:duration-100 text-white justify-evenly  m-auto items-center text-center`}>
                    <Popup
                        trigger=
                        {
                            <li class="mb-1  cursor-pointer font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-algoXcolor">
                                Products
                            </li>
                        }
                        on={['hover', 'focus']}
                        position={'bottom center'}
                        contentStyle={{minWidth:"250px", width:"250px",height:"200px",flexGrow : 1, borderRadius:"4px",zIndex:"1001",background:"transparent",border:"none"}}
                        >   
                        <ToolTip />
                    </Popup>

                    <li class="nav-item-main mb-1">
                        <Link
                            to="/team"
                            className="font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-algoXcolor"
                        >
                        Team
                        </Link>
                    </li>
                    {/* <li class="nav-item-main mb-1">
                        <Link
                            to="/purchase"
                            className="font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-algoXcolor"
                        >
                        Purchase
                        </Link>
                    </li> */}
                </ul>
            </div>
      </>
    )
}
export default NavLinks;