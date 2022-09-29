import './ToDayExercise.css'

import React from 'react';

const ToDayExercise = (props) => {
  const {img,nameOfActivity,aboutzActivity,forAge,timeRequired}=props.user;
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <h3>{nameOfActivity}</h3>
        <p><small>{aboutzActivity}</small></p>
        <p>For Age : <strong>{forAge}</strong></p>
        <p>Time Required : <strong>{timeRequired}</strong></p>
        <button >Add To List</button>
      </div>
      
    </div>
  );
};

export default ToDayExercise;