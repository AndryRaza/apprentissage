import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  //Création d'une state

  
  render() {
    return (
      <div className="App">
        <Mycars/>
      </div>
    );
  };


}

export default App;
