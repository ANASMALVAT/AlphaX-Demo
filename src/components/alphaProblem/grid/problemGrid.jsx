import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from './grid';
import './styles/problemGrid.css';

const ProblemGrid = ({ problemList }) => {

  
  const [categorizedProblems, setCategorizedProblems] = useState({ easy: [], medium: [], hard: [], special:[]});
  const problemCategories = useSelector((state) => state.problemCategories.category);
  const problemCategoryType = useSelector((state) => state.problemType.difficulty);
  const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);
  const userCompletedProblems = sessionStorage.getItem('user_completed_problems') || [];

  const categorizeProblems = (list, categories) => {

    const updatedCategorizedProblems = { easy: [], medium: [], hard: [], special: [] };

    for (let i = 0; i < list.length; i++) {
        const problem = list[i];
        if (problem && 
            categories.length === 0 || 
            categories.some(category => problem?.question_category?.some(problemCategory => category.includes(problemCategory)))
           )
        {
            if (problem?.isFree) {
                updatedCategorizedProblems[problem?.question_difficulty].unshift(problem);
            } else {
                updatedCategorizedProblems[problem?.question_difficulty].push(problem);
            }
        }
    }
    return updatedCategorizedProblems;
};

const shuffleAllProblems = (categorizedProblems) => {

  const allProblems = [].concat(
    categorizedProblems.easy,
    categorizedProblems.medium,
    categorizedProblems.hard,
    categorizedProblems.special
  );
  
  for (let i = allProblems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allProblems[i], allProblems[j]] = [allProblems[j], allProblems[i]];
  }


  const updatedCategorizedProblems = { easy: [], medium: [], hard: [], special: [] };

  if(allProblems.length < 4 ){
    for(let i = 0; i < allProblems.length; i ++){
      updatedCategorizedProblems.easy.push(allProblems[i]);
    }
  }
  else{
    const problemsPerCategory = Math.floor(allProblems.length / 4);
    allProblems.forEach((problem, index) => {
      const categoryIndex = Math.floor(index / problemsPerCategory);
      updatedCategorizedProblems[Object.keys(updatedCategorizedProblems)[categoryIndex]].push(problem);
    });
  }

  return updatedCategorizedProblems;
};


useEffect(() => {
    const updatedCategorizedProblems = categorizeProblems(problemList, problemCategories);
    setCategorizedProblems( categorizedProblems => updatedCategorizedProblems);
}, [problemList, problemCategories]);

  useEffect(() => {

    if(!problemCategoryType){
      const shuffledProblems = shuffleAllProblems(categorizedProblems);
      setCategorizedProblems(categorizedProblems => shuffledProblems);
    }else{
      const updatedCategorizedProblems = categorizeProblems(problemList, problemCategories);
      setCategorizedProblems(categorizedProblems => updatedCategorizedProblems);
    }

  }, [problemCategoryType]);



  




  return (
    <div className='flex justify-evenly mt-12 mb-12 flex-wrap gap-8'>

    { categorizedProblems.easy.length  != 0 &&
      <div className='category-easy'>
        <h2 className='h2 mb-2 text-algoblack'>{problemCategoryType ? "Easy" : "Random"}</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.easy.map((problem) => (<Grid isUserLoggedIn={IsUserLoggedIn} isProblemSolved={userCompletedProblems.includes(problem.question_id)}  className="fade-in" problemInfo={problem} key={problem?.id} />))}
        </div>
      </div>
    }


    { categorizedProblems.medium.length != 0 &&
      <div className='category-medium'>
        <h2 className='h2 mb-2 text-algoblack'>{problemCategoryType ? "Medium" : "Random"}</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.medium.map((problem) => (<Grid isUserLoggedIn={IsUserLoggedIn} isProblemSolved={userCompletedProblems.includes(problem.question_id)} className="fade-in" problemInfo={problem} key={problem?.id}  /> ))}
        </div>
      </div>
    }

    { categorizedProblems.hard.length  != 0 &&
      <div className='category-hard'>
        <h2 className='h2 mb-2 text-algoblack'>{problemCategoryType ? "Hard" : "Random"}</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.hard.map((problem) => ( <Grid isUserLoggedIn={IsUserLoggedIn} isProblemSolved={userCompletedProblems.includes(problem.question_id)} className="fade-in" problemInfo={problem} key={problem?.id} /> ))}
        </div>
      </div>
    }

      { categorizedProblems.special.length != 0 &&
        <div className='category-special'>
          <div className='flex text-center justify-center align-middle' >
              <div className=' flex text-center text-[#7E3AF2] justify-center align-middle font-semibold mr-1'>
                <h2 className=' h-full text-[32px] font-semibold'>{problemCategoryType ? "X" : ""}</h2>
              </div>
              <div className=' flex text-center justify-center align-middle'>
              <h2 className='h2 mb-2 text-algoblack'>{problemCategoryType ? "special" : "Random"}</h2>
              </div>
          </div>
          <div className='grid gap-3 mt-4 fade-in'>
            {
              categorizedProblems.special.map((problem) => (<Grid isUserLoggedIn={IsUserLoggedIn} isProblemSolved={userCompletedProblems.includes(problem.question_id)} className="fade-in" problemInfo={problem} key={problem?.id} /> ))
            }
          </div>
        </div>
      }
    </div>
    
  );
};

export default ProblemGrid;
