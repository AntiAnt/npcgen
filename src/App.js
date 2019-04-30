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
         <button onClick={()=>{this.dropDown("Submenu-Randnpc","Show-Random-Submenu")}} id="Random-Npc" className="Buttons"> Generate Random Npc
          </button>
            <ul id="Submenu-Randnpc" className="Generate-Random-Submenu">
            <li>Generates completly random Npc</li>
            <li><button onClick={()=>{this.randNpc()}}className="Submenu-Buttons">Generate</button></li></ul>
          <button onClick={()=>{this.dropDown("Level","Show-Level-Submenu")}} id="Level-Npc" className="Buttons"> Level </button>
            <ul id="Level" className="Level-Submenu">
              <li>Choose your Npc level.</li>
              <li><button className="Submenu-Buttons">level</button></li> {/*needs onClick function and css*/}
            </ul>
          <button onClick={()=>{this.dropDown("Class", "Show-Class-Submenu")}} id="Class-Npc" className="Buttons"> Class </button>
            <ul id="Class" className="Class-Submenu">
              <li>Choose your class.</li>
              <li><button  className="Submenu-Buttons">Class</button> </li> {/*needs onClick function and css*/}
            </ul>
        </div>
        <div className="Npc-sheet">4 
          
        </div>
      </div>
    );
  }
}

export default App;
