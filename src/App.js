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
  dropDown(id,CLASS){
    var x = document.getElementById(id);
    if (x.className.indexOf(CLASS) == -1) {
      x.className += ' '+CLASS;
    }else{
      x.className = x.className.replace(" "+CLASS," ");
    }

  }
  // Add random npc function and other funtions//
  randNpc(){ 

  }
  
  render() {
    return (
      
      <div className="App">
        <div>
          <img className="Logo" src={require("./logo2.png")} alt="d&d tools logo"/>
          <span className="Title">D&D Tools</span> 

        </div>
        <div className="Menu">2</div> 
        <div className="Left-column">
         <button id="Random-Npc" onClick={()=>{this.dropDown("Submenu-Randnpc","Show-Random-Submenu")}}  className="Buttons"> Generate Random Npc
          </button>
            <ul id="Submenu-Randnpc" className="Generate-Random-Submenu">
            <li>Generates completly random Npc</li>
            <li><button onClick={()=>{this.randNpc()}}className="Submenu-Buttons">Generate</button></li></ul>
          <button id="Level-Npc" onClick={()=>{this.dropDown("Level","Show-Level-Submenu")}}  className="Buttons"> Level </button>
            <ul id="Level" className="Level-Submenu">
              <li>Choose your Npc level.</li>
              <li><button className="Submenu-Buttons">level</button></li> {/*needs onClick function and css*/}
            </ul>
          <button id="Race-Npc" onClick={()=>{this.dropDown("Race", "Show-Race-Submenu")}} className="Buttons"> Race </button>
            <ul id="Race" className="Race-Submenu">
              <li>Choose Npc class.</li>
              <li><button className="Submenu-Buttons" onClick={()=>{this.raceList()}}> Race </button></li> {/*needs work*/}
              <li className="List-Items">Random Race</li>
              <li><button className="Submenu-Buttons" onClick={()=>{this.randRace()}}>Random Race</button></li>
            </ul>
          <button id="Class-Npc" onClick={()=>{this.dropDown("Class", "Show-Class-Submenu")}}  className="Buttons"> Class </button>
            <ul id="Class" className="Class-Submenu">
              <li>Choose your class.</li>
              <li><button  className="Submenu-Buttons">Class</button> </li> {/*needs onClick function and css*/}
              <li>Or Generate a Random Class</li>
              <li><button className="Submenu-Buttons" onClick={()=>{this.randClass()}}> Random Class </button></li>
            </ul>
          <button id="Ability-Npc" onClick={()=>{this.dropDown("Ability-Scores","Show-Ability-Submenu")}} className="Buttons"> Ability Scores </button>
            <ul id="Ability-Scores" className="Ability-Submenu">
              <li>Choose Ability Scores</li>
                <ul className="List-Abilities">
                  <li>Choose Ability Scores</li>
                  <li>Strength</li> {/*TODO input for these scores*/}
                  <li>Dexterity</li>
                  <li>Constitution</li>
                  <li>Inteligence</li>
                  <li>Wisdom</li>
                  <li>Charisma</li>
                  <li><button className="Submenu-Buttons" onClick={()=>{this.randAbilityScore()}}>Randomize Scores</button></li> {/*Random Ability scores function onClick*/}
                </ul>
            </ul>
          <button id="Background-Npc" onClick={()=>{this.dropDown("Background", "Show-Background-Submenu")}} className="Buttons">Background</button>
            <ul id="Background" className="Background-Submenu Submenu">
              <li>Choose a Npc Background</li>
              <li><button className="Submenu-Buttons">Background</button></li> {/* TODO onClick funtion for dropdown to choose a basckground form a list */}
              <li className="List-Items"> Random Background</li>
              <li><button className="Submenu-Buttons">Random Background</button></li>
            </ul>
          <button id="Prof-Npc" onClick={()=>{this.dropDown('Prof', 'Show-Prof-Submenu')}} className= "Buttons">Proficiencies</button>
            <ul id="Prof" className="Submenu">
              <li>Choose Npc Proficiencies</li>
              <li><button className= "Submenu-Buttons">Armor</button></li> {/* TODO dropdown checkboxes for these buttons */}
              <li><button className= "Submenu-Buttons">Weapons</button></li>
              <li><button className= "Submenu-Buttons">Languages</button></li>
              <li><button className= "Submenu-Buttons">Tools</button></li>
            </ul>
          <button id="Equip-Npc" onClick={()=>{this.dropDown('Equip', 'Show-Equip-Submenu')}} className="Buttons">Equipment</button>
            <ul id='Equip' className='Submenu'>
              <li><h5>Npc Equipment</h5></li> {/* TODO Dropdown checkboxes */}
              <li><button>Weapons</button></li>
              <li><button>Armor</button></li>
              <li><button>Gear</button></li>
              <li><button>Tools</button></li>
            </ul>
        </div>
        <div className="Npc-sheet">4 
          
        </div>
      </div>
    );
  }
}

export default App;
