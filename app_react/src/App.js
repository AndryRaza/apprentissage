import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  //Création d'une state
  state = {
    titre: 'Mon catalogue Voitures'
  };

  //On va changer le titre lorsque l'on cliquera sur le bouton
  changeTitle = (e) => {
    this.setState({
      titre: 'Mon nouveau titre'
    });
    //C'est la seule façon pour changer les states
  };

  changeViaparam = (titre) => {
    this.setState({
      titre: titre //(ou titre seulement si les deux noms sont pareils)
    })
  };

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  };

  changeViaInput = (e) => {
      this.setState({
        titre: e.target.value
      })
  };

  
  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button onClick= {this.changeTitle} >Changer le nom en dur</button>
        <button onClick= {() => this.changeViaparam('Titre via un paramètre')} >Changer le nom via paramètre</button> 
        <button onClick= {this.changeViaBind.bind(this, 'Titre via bind')} >Via bind</button> 
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  }


}

export default App;
