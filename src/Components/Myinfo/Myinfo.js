import React from 'react';
import './Myinfo.css'
import nomanpic from '../../images/noman1.jpg'

const Myinfo = () => {
  return (
    <div>
        <div className='myinfo'>
            <img src={nomanpic} alt="" />
        <div className='nameAndAdress'>
          <h3 style={{margin:"0px"}}>Noman</h3>
          <p style={{margin:"0px"}}>Dhaka,Bangaldesh</p>
        </div>
    </div>
    <div className='moreInfo'>
      <div className="weight">
        <h2 style={{margin:"0px"}}>63kg</h2>
        <p style={{margin:"0px"}}>Weight</p>
      </div>
      <div className="hight">
        <h2 style={{margin:"0px"}}>5.8</h2>
        <p style={{margin:"0px"}}>Hight</p>
      </div>
      <div className="age">
        <h2 style={{margin:"0px"}}>25 <small style={{color:"gray"}}>yrs</small></h2>
        <p style={{margin:"0px"}}>Age</p>
      </div>
    </div>
    </div>
  );
};

export default Myinfo;