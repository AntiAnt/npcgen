import React, { Component } from 'react';
import './App.css';
import {Button, ButtonGroup} from 'semantic-ui-react';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      male: false,
      female: false
    };
  }
  onMaleClick(){
    this.setState({
      male: true,
      female: false
    });
  }

  onFemaleClick(){
    this.setState({
      male: false,
      female: true
    });
  }
  // Add random npc function//

  render() {
    return (
      
      <div className="App">
        <div>
          <img className="Logo" src={require("./logo2.png")} rel="d&d tools logo"/>
          <span className="Title">D&D Tools</span> 

        </div>
        <div className="Menu">2</div> 
        <div className="Left-column">
          <li>
            <ul className="Button-column">
              <li><button className="Buttons Level mainmenubtn"> Level</button></li> {/*used to set Hit points, Prof modifier, features, Spells*/}
              <div class="dropdown-child">
                <a href="http://wwww.yourdonain.com/page1.html">Child menu 1</a>
              </div>
              <li><button className="Buttons Gender"> Gender</button></li> {/* for role-playing and name choice*/}
              <li><button className="Buttons Race"> Race</button></li> 
              <li><button className="Buttons Background">Background</button></li>
              <li><button className="Buttons Ability-scores">Ability Scores</button></li> {/*Ability modifiers are calculated from these. calculated by the sum of 4d6 - the lowest d6*/}
              <li><button className="Buttons Saving-throws">Saving Throws</button></li>
              <li><button className="Buttons Skill-scores">Skill Scores</button></li>
              <li><button className="Buttons Proficiencies">Proficiencies</button></li>
              <li><button className="Buttons Language">Languages</button></li>
              <li><button className="Buttons Equipment">Equipment</button></li>
              <li><button className="Buttons Spellcasting">Spellcasting</button></li> {/* need to put a list together to choose from*/}
              <li><button className="Buttons Hit-points">Hit Points</button></li>
              <li><button className="Buttons Armor-class">Armor Class</button></li>
              <li><button className="Buttons Traits">Traits</button></li>
              <li><button className="Buttons Name">Name</button></li>
              <li><button className="Buttons Alignment">Alignment</button></li>
            </ul> 
          </li>
        </div>
        <div className="Npc-sheet dropdown">4 
        <div class="dropdown">
          <button onclick="myFunction()" class="dropbtn">Dropdown</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> 
        </div>
      </div>
    );
  }
}

export default App;
