import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {problemCategories} from "../../../data/problemCategory"
import { useSelector,useDispatch } from "react-redux";
import { changeCategory } from "../../../redux/slices/problemCategorySlice";
import "./styles/topicDropdown.css"

const TopicFilterDropdown = () => {
  const problemCategory = useSelector((state) => state.problemCategories.category);
  const [selected,setSelected] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {

    let selectedCategories = [];

    for(let i = 0; i < selected.length ; i ++){
      selectedCategories.push(selected[i].value);
    }
    dispatch(changeCategory(selectedCategories));

  },[selected])

  return (
    <div className="">
      <MultiSelect
        
        options={problemCategories}
        value={selected}
        onChange={setSelected}
        labelledBy="FILTERS"
        className="multi-select shadow-md"
        
      />
    </div>
  );
};

export default TopicFilterDropdown;