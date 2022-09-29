import React, {useEffect, useState } from 'react';
import ToDayExercise from '../ToDayExercise/ToDayExercise';
import logo from '../../images/gym3.ico'
import './Fitness.css'
import Myinfo from '../Myinfo/Myinfo';

const Fitness = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('activitydata.json')
    .then(req=>req.json())
    .then(data=>setUsers(data))
  },[])
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
            users.map(user=><ToDayExercise user={user}></ToDayExercise>)
          }
          </div>
      </div>


      <div className="exercise-details">
        <Myinfo></Myinfo>
        <div>
        <h3 style={{marginLeft:'20px'}}>Add A Break</h3>

        <div className='addbreak'>
          <h3>10<small style={{color:"gray"}}>s</small></h3>
          <h3>20<small style={{color:"gray"}}>s</small></h3>
          <h3>30<small style={{color:"gray"}}>s</small></h3>
          <h3>40<small style={{color:"gray"}}>s</small></h3>
          <h3>50<small style={{color:"gray"}}>s</small></h3>
        </div>

        <div className='exercise'>
          <div>
             <h3>Exercise Details</h3>
             <div className="exerciseTime">
              <h4>Exercise Time :</h4>
             </div>
             <div className="breakTime">
              <h4>Break Time :</h4>
             </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default Fitness;