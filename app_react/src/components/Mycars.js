import React, { Component } from 'react';   //On importe react de react
import Car from './Cars';

//On crée la classe Mycars
class Mycars extends Component {


    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: 2000 },
            { name: 'Mercedes', color: 'black', year: 1980 },
            { name: 'Peugeot', color: 'blue', year: 2010 }
        ],
        titre: 'Mon catalogue de voitures 2'
    };

    addTenYears = () => {

        const updatedState = this.state.voitures.map((param)=> {
            return  param.year -= 10;
        });

        this.setState({
            updatedState
        });
    }

    render() {

        const year = new Date().getFullYear();

        return (
            <div>
                <h1>{this.state.titre}</h1>

                <button onClick={this.addTenYears}>+10ans</button>
                {
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <div key={index}> 
                            <Car color={voiture.color}  year={ year - voiture.year + ' ans'} name={voiture.name}/>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

//Puis on exporte la classe pour pouvoir l'importer et l'afficher
export default Mycars;