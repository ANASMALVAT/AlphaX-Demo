import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/customCss';
import { languageOptions } from '../../../../data/codingLanguages';
import { setLanguage } from '../../../../redux/slices/dropDownSlice';
import {useSelector, useDispatch } from "react-redux"


const LanguageDropDown = () => {
    
    const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
    const [languageValue, setLanguageValue] = useState(dropdownValue.language);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setLanguageValue(dropdownValue.language);
    },[dropdownValue.language])

    const setDropdowmLanguage = (selectedOption) => {
        dispatch(setLanguage(selectedOption));
    }
    
    return(
        <div className=' mr-1 '>
            <Select
                options={languageOptions}
                styles={customStyles}
                onChange={(selectedOption) => setDropdowmLanguage(selectedOption)}
                value={languageValue}
                isSearchable={false}
            />
        </div>
    )
}
export default LanguageDropDown;