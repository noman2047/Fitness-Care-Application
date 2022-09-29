import React, {useEffect, useState } from 'react';
import ToDayExercise from '../ToDayExercise/ToDayExercise';
import logo from '../../images/gym3.ico'
import './Fitness.css'

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
        <h2>Noman Khan</h2>
      </div>
      
    </div>
  );
};

export default Fitness;