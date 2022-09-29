import React from 'react';
import './Question.css'

const Question = () => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Questions And Answers:</h3>
          <div style={{border:"2px solid blue",margin:"6px",padding:"10px",borderRadius:"20px"}}>
          <h3>(1)How Does React Works?</h3>
          <p><strong>Answer: </strong> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application.</p>
          <h3>(2)Difference Between Props And State?</h3>
          <p><strong>Answer:</strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
          <h3>(3)What does useEffect do without data load?</h3>
          <p><strong>Answer:</strong> React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
    </div>
    </div>
  );
};

export default Question;