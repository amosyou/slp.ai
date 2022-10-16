import React from 'react';
  
const Result = ({ score }) => {
  return (
    <div className='flex-container'>
      <h1>Results</h1>
      <h2>Your score is: {score}</h2>
      <h2>If you score above 75%, it is unlikely that you have a speech/language 
        disorder.<br/>
        If you score below 75%, you may want to consider further consultations 
        with a speech therapist. </h2>
    </div>
  );
};
  
export default Result;