import React, { Component } from "react";
import ListOfSounds from './ListOfSounds'

class DrumMachine extends Component {
  // constructor(props) {
  //   super(props);
  //   this.playMusic = this.playMusic.bind(this);
  // }

  playMusic = (key) => {
    const sound = document.getElementById(key);
    sound.play();
  };

  componentDidMount() {
    document.addEventListener('keydown', function(e) {
      // if (e.keyCode === 81) {
      //   document.getElementById('Q').play();
      // }
      switch (e.keyCode) {
        case 81:
          document.getElementById('Q').play();
      }
    });
  }

    
  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        {ListOfSounds.map((item) => {
          return (
          <button className='drum-pad' id={item.id} onClick={() => this.playMusic(item.key)}>
            <audio className='clip' id={item.key} src={item.src}/ >
            {item.key}
          </button>)
        })}
      </div>
    );
  }
}
  
  export default DrumMachine;