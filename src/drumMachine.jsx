import React, { Component } from "react";
import ListOfSounds from './ListOfSounds'

class DrumMachine extends Component {
    constructor(props) {
    super(props);
    this.state = {
      nameOfSound: ''
    }
  }


  playMusic = (key, id) => {
    const sound = document.getElementById(key);
    sound.play();
    this.setState({
      nameOfSound: id
    })
  };

  componentDidMount() {
    document.addEventListener('keydown', function(e) {
      switch (e.keyCode) {
        case 81:
          document.getElementById('Q').play();
          break;
        case 87:
          document.getElementById('W').play();
          break;
        case 69:
          document.getElementById('E').play();
          break;
        case 65:
          document.getElementById('A').play();
          break;
        case 83:
          document.getElementById('S').play();
          break;
        case 68:
          document.getElementById('D').play();
          break;
        case 90:
          document.getElementById('Z').play();
          break;
        case 88:
          document.getElementById('X').play();
          break;
        case 67:
          document.getElementById('C').play();
          break;
        default:
      }
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" >
          {this.state.nameOfSound}
        </div>
        {ListOfSounds.map((item) => {
          return (
            <button className='drum-pad' id={item.id} onClick={() => this.playMusic(item.key, item.id)}>
              <audio className='clip' id={item.key} src={item.src}/ >
              {item.key}
            </button>
          )
        })}
      </div>
    );
  }
}
  
export default DrumMachine;