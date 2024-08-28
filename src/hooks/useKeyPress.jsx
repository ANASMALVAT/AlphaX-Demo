 import React from "react";
 import { useState } from "react";
 import { useEffect } from "react";
 const useKeyPress = (clickedKey) => {
    const [keyPress, setKeyPress] = useState(false);

    function downHandler({key}) {
        if(key === clickedKey){
            setKeyPress(true);
        }
    }

    function upHandler({key}){
        if(key === clickedKey){
            setKeyPress(false);
        }
    }
    
    useEffect(() => {
        document.addEventListener("keyDown", downHandler)
        document.addEventListener("keyUp", upHandler)

        return () => {
            document.removeEventListener("keyDown", downHandler)
            document.removeEventListener("keyUp", upHandler)        
        }
    })
    return keyPress;
 }
 export default useKeyPress;