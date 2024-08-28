import { setAlphaPremiumUser } from "../redux/slices/alphaPremiumUser";
import { setAlphaUser } from "../redux/slices/alphaUser";
import { toggelUserLoginFalse } from "../redux/slices/userAuthentication";
import { useDispatch } from "react-redux";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(toggelUserLoginFalse());
        dispatch(setAlphaPremiumUser({}));
        dispatch(setAlphaUser({}));
        window.location.reload();
    };

    return logout;
};
