import React from 'react';
import './Exercise.css'


const ExerciseDetails = (props) => {
  let time=0;
  for(const singleTime of props.totalTime){
    time=time + singleTime;
  }
  return (
    <div>
        <h3>Exercise Details</h3>
        <div className="exerciseTime">
        <h4>Exercise Time : <span style={{color:"gray",marginLeft:"10px"}}>{time}</span><span style={{color:"gray"}}> Seconds</span></h4>
        </div>
        <div className="breakTime">
        <h4>Break Time : <span style={{color:"gray",marginLeft:"10px"}}>{props.addbreak}</span><span style={{color:"gray"}}> Seconds</span></h4>
        </div>
        <button className='btnActiv'>Activity Completed</button>
      
    </div>
  );
};

export default ExerciseDetails;