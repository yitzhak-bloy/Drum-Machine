import React, { useState, useEffect } from 'react';
import './drumMachine.scss';
import ListOfSounds from './ListOfSounds'

function DrumMachine() {

  const [nameOfSound, setNameOfSound] = useState('Click a button or Press a key');

  useEffect(() =>  {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 81:
          document.getElementById('Q').play();
          setNameOfSound('Heater-1')
          break;
        case 87:
          document.getElementById('W').play();
          setNameOfSound('Heater-2')
          break;
        case 69:
          document.getElementById('E').play();
          setNameOfSound('Heater-3')
          break;
        case 65:
          document.getElementById('A').play();
          setNameOfSound('Heater-4_1')
          break;
        case 83:
          document.getElementById('S').play();
          setNameOfSound('Heater-6')
          break;
        case 68:
          document.getElementById('D').play();
          setNameOfSound('Dsc_Oh')
          break;
        case 90:
          document.getElementById('Z').play();
          setNameOfSound('RP4_KICK_1')
          break;
        case 88:
          document.getElementById('X').play();
          setNameOfSound('Cev_H2')
          break;
        case 67:
          document.getElementById('C').play();
          setNameOfSound('Chord_2')
          break;
        default:
      }
    });
  })

  return (
    <div>
      <div id="drum-machine">
      <h1>drum machine</h1>
        <div id="display" >
          {nameOfSound}
        </div>
        {ListOfSounds.map((item) => {
          return (
            <button className='drum-pad' id={item.id} key={item.key} onClick={() => {
                const sound = document.getElementById(item.key);
                sound.play();
                setNameOfSound(item.id)
              }}
            >
              <audio className='clip' id={item.key} src={item.src} / >
              {item.key}
            </button>
          )
        })}
      </div>
    </div>
  );
}
  
export default DrumMachine;