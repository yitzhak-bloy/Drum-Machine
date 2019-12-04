import React from 'react';

function DrumMachine() {
    return (
      <div id="drum-machine">
          <div id="display"></div>
          <button className='drum-pad'>Q,</button>
          <button className='drum-pad'>W</button>
          <button className='drum-pad'>E</button>
          <button className='drum-pad'>A</button>
          <button className='drum-pad'>S</button>
          <button className='drum-pad'>D</button>
          <button className='drum-pad'>Z</button>
          <button className='drum-pad'>X</button>
          <button className='drum-pad'>C</button>
      </div>
    );
  }
  
  export default DrumMachine;