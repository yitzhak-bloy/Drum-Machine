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
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 81:
          document.getElementById('Q').play();
          this.setState({
            nameOfSound: 'Heater-1'
          })
          break;
        case 87:
          document.getElementById('W').play();
          this.setState({
            nameOfSound: 'Heater-2'
          })
          break;
        case 69:
          document.getElementById('E').play();
          this.setState({
            nameOfSound: 'Heater-3'
          })
          break;
        case 65:
          document.getElementById('A').play();
          this.setState({
            nameOfSound: 'Heater-4_1'
          })
          break;
        case 83:
          document.getElementById('S').play();
          this.setState({
            nameOfSound: 'Heater-6'
          })
          break;
        case 68:
          document.getElementById('D').play();
          this.setState({
            nameOfSound: 'Dsc_Oh'
          })
          break;
        case 90:
          document.getElementById('Z').play();
          this.setState({
            nameOfSound: 'RP4_KICK_1'
          })
          break;
        case 88:
          document.getElementById('X').play();
          this.setState({
            nameOfSound: 'Cev_H2'
          })
          break;
        case 67:
          document.getElementById('C').play();
          this.setState({
            nameOfSound: 'Chord_2'
          })
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
            <button className='drum-pad' id={item.id} key={item.key} onClick={() => this.playMusic(item.key, item.id)}>
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