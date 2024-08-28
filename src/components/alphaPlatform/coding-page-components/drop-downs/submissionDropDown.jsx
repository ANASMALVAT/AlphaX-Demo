import React, { useEffect, useState } from 'react';
import  Select  from 'react-select';
import { customStyles } from './styles/customCss';
import { useDispatch } from "react-redux"
import { setCode } from '../../../../redux/slices/codeDialog';

const SubmissionDropDown = () => {

    const [submissions, setSubmissions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const userSubmissionsJSON = sessionStorage.getItem('user-submission');
        const userSubmissions = JSON.parse(userSubmissionsJSON);
        setSubmissions(() => {
            return userSubmissions
        });
       
    },[])

    const openDialog = (selectedOption) => {
        if(selectedOption?.code){
            dispatch(setCode(selectedOption.code));
        }
    }

    return(
        <div className=' mr-1 '>

            <Select
                styles={customStyles}
                noOptionsMessage={() => 'No submission'}
                
                options={submissions.length > 0 ? (
                    submissions.map((submission, index) => {
                      let [datePart, timePart] = submission.submission_time.split(', ');
                      datePart = new Date(datePart);
                      const formattedDate = datePart.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                      const formattedLabel = ` ${submission.code_language} - ${formattedDate}`;
                      return {
                        label: formattedLabel,
                        value: submission.submission_time,
                        code: submission.user_code
                      };
                    })
                  ) : [{label :"No Submission", value:"No Submission"}]}
                onChange={(selectedOption) => openDialog(selectedOption)}
                placeholder={`Last 5 submission`}
                isSearchable={false}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 10,
                    colors: {
                    ...theme.colors,
                       text: 'white',
                       primary25: 'white',
                       primary: '',
                       },
                  })}
            />
        </div>
    )
}
export default SubmissionDropDown;