import React ,{useEffect}  from 'react';
import Popup from 'reactjs-popup';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLoginWindowFalse } from '../../../redux/slices/userLoginWindow';
import LoginComponent from './loginComponent';
import "../styles/userLogin.css"

const UserLogin = () => {
    
    const dispatch = useDispatch();
    const LoginWindow = useSelector((state) => state.userLoginWindow.showLoginWindow);

    const handleClose = () => {
        dispatch(toggelLoginWindowFalse());
    };
    
    return (
            <Popup
                closeOnDocumentClick
                open={LoginWindow}
                onClose={handleClose}
                contentStyle={{zIndex:"10"}}
                className=' my-popup'
            >
            {
                <div className="modal flex min-w-[300px] max-w-[300px] z-10">
                    <button className="close absolute right-2 top-[-4px] text-gray-500"  style={{color:"rgb(107 114 128)",fontSize:"30px"}} onClick={handleClose}>
                        &times;
                    </button>
                    <LoginComponent />
                </div>
            }
            </Popup>
    )
}

export default UserLogin;