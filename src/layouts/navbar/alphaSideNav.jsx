import React from 'react';
import ToolTip from "./tooltip";
import Popup from 'reactjs-popup';


const AlphaSideNav = () => {
        return <>
        <div className=''>
            <nav className='nav'>
                <div className='logo'></div>
                <ul>
                    <li>
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
                        
                    </li>
                        <a className='links'> Teams </a>
                </ul>
            </nav>
        </div>
        </>
}

export default AlphaSideNav;