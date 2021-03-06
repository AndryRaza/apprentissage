import React, { Component } from 'react';   //On importe react de react
import Car from './Cars';

//On crée la classe Mycars
class Mycars extends Component {

    //Fonction qui va se lancer quand quelqu'un va copier le texte
    noCopy = () => {
        alert('merci de ne pas copier le texte');
    };

    // //On va ajouter un style lors du survol du titre h1
    // addStyle = (e) => {
    //     e.target.classList.toggle('styled');        //toggle si la classe existe la supprime, sinon la rajoute
    // };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p onCopy={this.noCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Car color="red"> Ford </Car>
                <Car > Mercedes </Car>
                <Car color="blue"></Car>
            </div>)
    }
}

//Puis on exporte la classe pour pouvoir l'importer et l'afficher
export default Mycars;