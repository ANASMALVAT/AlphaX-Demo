import React, { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./styles/customCss";
import {  useDispatch, useSelector } from "react-redux";
import  {monacoThemes} from "../../../../data/themeOptions";
import { setTheme } from "../../../../redux/slices/dropDownSlice";


const ThemeDropdown = ({}) => {
  
  const dispatch = useDispatch();
  const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);

  const setDropdownTheme = (theme) => {
    dispatch(setTheme(theme.value));
  }
  const camelCase = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <div className="mr-2 ">
      <Select
        placeholder={`Select Theme`}
        options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))}
        value={{label:camelCase(dropdownValue.theme)}}
        styles={customStyles}
        onChange={(theme) => setDropdownTheme(theme)}
        isSearchable={false}
      />
    </div>
  );
};

export default ThemeDropdown;