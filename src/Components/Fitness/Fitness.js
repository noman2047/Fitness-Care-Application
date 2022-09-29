import React, {useEffect, useState } from 'react';
import ToDayExercise from '../ToDayExercise/ToDayExercise';
import logo from '../../images/gym3.ico'
import './Fitness.css'
import Myinfo from '../Myinfo/Myinfo';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Question from '../Question/Question';
import Footer from '../footer/Footer';

const Fitness = () => {
  const [users,setUsers]=useState([])
  const [totalTime,settotalTime]=useState([])
  const [breakTime1,setBreakTime]=useState(0)

  console.log(breakTime1);

  useEffect(()=>{
    fetch('activitydata.json')
    .then(req=>req.json())
    .then(data=>setUsers(data))
  },[])

  const handalAddToExerciseDetails=(privTime)=>{
    const newtime=[...totalTime,privTime];
    settotalTime(newtime);
  }

  const breakTime = (time) =>{
    setBreakTime(time)

  }
  return (
    <div className='OverallContainer'>
     
      <div className="todays-exercise">
        <div className="titleWithlogo">
          <img src={logo} alt="" style={{marginRight:"10px"}} />
          <h2>Fitness Care Club</h2>
        </div>
        <h3 style={{marginLeft:"14px" , color: "orange"}}>Select today’s exercise</h3>
          <div className="userInCard">
          {
            users.map(user=><ToDayExercise key={user.nameOfActivity} user={user} handalAddToExerciseDetails={handalAddToExerciseDetails}></ToDayExercise>)
          }
          </div>
          <Question></Question>
          <Footer></Footer>
      </div>


      <div className="exercise-details">
        <Myinfo></Myinfo>
        <div>
        <h3 style={{marginLeft:'20px'}}>Add A Break</h3>

        <div className='addbreak'>
          <button onClick={()=>breakTime(10)}><h3>10<small style={{color:"gray"}}>s</small></h3></button>
          <button onClick={()=>breakTime(20)}><h3>20<small style={{color:"gray"}}>s</small></h3></button>
          <button onClick={()=>breakTime(30)}>  <h3>30<small style={{color:"gray"}}>s</small></h3></button>
          <button onClick={()=>breakTime(40)}> <h3>40<small style={{color:"gray"}}>s</small></h3></button>
          <button onClick={()=>breakTime(50)}> <h3>50<small style={{color:"gray"}}>s</small></h3></button>
        </div>

        <div className='exercise'>
          <div>
            <ExerciseDetails totalTime={totalTime} addbreak={breakTime1}></ExerciseDetails>
             
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Fitness;