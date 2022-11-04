import React from 'react';
import grlogo from '../images/grlogo.png';
// import grgif from '../images/GRUS.gif';
 
function Home() {
  return (
    <div className='home'>
      <div className="Applogo">
          <img src={grlogo} className="App-logo" alt="" />
      </div>
      {/* <p class="p1">we create </p><p id="p2">identity</p> */}
      <div className='gruss'>
      <img src={require('../images/GRUS.gif')} className="gruss-h" alt="Grustl-gif" />
      </div>
    </div>
  );
}

export default Home;
