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
  dropDown(){
    var x = document.getElementById("Submenu");
    if (x.className.indexOf("Show-Submenu") == -1) {
      x.className += ' Show-Submenu';
    }else{
      x.className = x.className.replace(" Show-Submenu"," ");
    }

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
         <button onClick id="Random-Npc" className="Buttons"> Generate Random Npc
         </button>
          <ul id="Submenu" className="Generate-Random-Submenu">
            <li>Generates completly random Npc</li>
            <li><button className="Submenu-Buttons">Generate</button></li></ul>
        </div>
        <div className="Npc-sheet">4 
          
        </div>
      </div>
    );
  }
}

export default App;
