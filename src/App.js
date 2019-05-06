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
              <li><button className="Submenu-Buttons">Weapons</button></li>
              <li><button className="Submenu-Buttons">Armor</button></li>
              <li><button className="Submenu-Buttons">Gear</button></li>
              <li><button className="Submenu-Buttons">Tools</button></li>
              <li><button className="Submenu-Buttons">Random Equipment</button></li>
            </ul>
          <button id="Spells-Npc" onClick={()=>{this.dropDown("Spells", "Show-Spells-Submenu")}} className="Buttons">Spells</button>
            <ul id="Spells" className="Submenu">
              <li>Choose your Npc spells</li>
              <li><button className="Submenu-Buttons">Cantrips</button></li>
              <li><button className="Submenu-Buttons">Spell Level 1</button></li> {/* TODO lots to do here lol */}
              <li><button className="Submenu-Buttons">Spell Level 2</button></li>
              <li><button className="Submenu-Buttons">Spell Level 3</button></li>
              <li><button className="Submenu-Buttons">Spell Level 4</button></li>
              <li><button className="Submenu-Buttons">Spell Level 5</button></li>
              <li><button className="Submenu-Buttons">Spell Level 6</button></li>
              <li><button className="Submenu-Buttons">Spell Level 7</button></li>
              <li><button className="Submenu-Buttons">Spell Level 8</button></li>
              <li><button className="Submenu-Buttons">Spell Level 9</button></li>
              <li><button className="Submenu-Buttons">Random Spells</button></li>
            </ul>
          <button id="Hits-Npc" onClick={()=>{this.dropDown("Hits", "Show-Hits-Submenu")}} className="Buttons">Hit Points</button>
            <ul id="Hits" className="Submenu">
              <li><label for="max">Maximum Hit Points</label></li>
              <li><input type="text" id="max" name="max" minlength="1" maxlength="3" size="5" className="Submenu-Inputs"></input> </li>
              <li><label for="Curr">Current Hit Points</label></li>
              <li><input type="text" id="Curr" name="Curr" minlength="1" maxlength="3" size="5" className="Submenu-Inputs"></input> </li>
              <li className="List-Items"><button className="Submenu-Buttons">Random Hit Points</button></li>
            </ul>
          <button id="Armor-Npc" onClick={()=>{this.dropDown("Armor", 'Show-Armor-Submenu')}} className="Buttons">Armor Class</button>
            <ul id='Armor' className='Submenu'>
              <li><h5>Armor Class</h5></li>
              <li><input type="text" minlength="1" maxlength='2' size='5' className='Submenu-Inputs'></input> </li> {/* Currently set by equipped armor */}
            </ul>
          <button id='Features-Npc' onClick={()=>{this.dropDown('Features', 'Show-Features-Submenu')}} className='Buttons'>Features</button>
            <ul id='Features' className='Submenu'>
              <li><button className='Submenu-Buttons'>Choose Features</button></li>

            </ul>
          <button id='Traits-Npc' onClick={()=>{this.dropDown('Traits', 'Show-Traits-Submenu')}} className='Buttons'>Traits</button>
            <ul id='Traits' className='Submenu'>
              <li><label for='Personality Traits'>Personality Traits</label></li>
              <li><input type='text' id='Personality Traits' name='Personality Traits' minlength='1' maxlength='100' size='10'></input></li>
            </ul>
          
        </div>
        <div className="Npc-sheet">4 
          
        </div>
      </div>
    );
  }
}

export default App;
