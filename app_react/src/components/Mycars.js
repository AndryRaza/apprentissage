import React, { Component } from 'react';   //On importe react de react
import Car from './Cars';

//On crée la classe Mycars
class Mycars extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <Car color="red"> Ford </Car>
                <Car > Mercedes </Car>
                <Car color="blue"></Car>
             
            </div>)
    }
}

//Puis on exporte la classe pour pouvoir l'importer et l'afficher
export default Mycars;