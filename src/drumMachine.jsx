import React, { Component } from "react";

   class DrumMachine extends Component {
    constructor(props) {
      super(props);
      this.playMusic = this.playMusic.bind(this);
    }

  playMusic = () => {
    const sound = document.getElementById('Q');
    sound.play();
  };

    render() {
      return (
        <div id="drum-machine">
          <div id="display" />

          <button className='drum-pad' id='Heater-1' onClick={() => this.playMusic()}>
            <audio   className='clip' id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/ >
            Q
          </button>
          <button className='drum-pad' id='W'>
            <hudio src="" className='clip' id="W">
            </hudio>
            W
          </button>
          <button className='drum-pad' id='E'>
            <hudio src="" className='clip' id="E">
            </hudio>
            E
          </button>
          <button className='drum-pad' id='A'>
            <hudio src="" className='clip' id="A">
            </hudio>
            A
          </button>
          <button className='drum-pad' id='S'>
            <hudio src="" className='clip' id="S">
            </hudio>
            S
          </button>
          <button className='drum-pad' id='D'>
            <hudio src="" className='clip' id="D">
            </hudio>
            D
          </button>
          <button className='drum-pad' id='Z'>
            <hudio src="" className='clip' id="Z">
            </hudio>
            Z
          </button>
          <button className='drum-pad' id='X'>
            <hudio src="" className='clip' id="X">
            </hudio>
            X
          </button>
          <button className='drum-pad' id='C'>
            <hudio src="" className='clip' id="C">
            </hudio>
            C
          </button>
        </div>
      );
    }

  }
  
  export default DrumMachine;