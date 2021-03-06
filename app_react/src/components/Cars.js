import React from 'react';

const Car = ({ children, color }) => {

    const colorInfo = color ? (<p>Couleur: { color}</p>) : (<p>Couleur : Non</p>); //On définit une condition pour gérer le cas  où on a pas de couleur
 
   if (children){
        return(
            <div style={{
                backgroundColor: 'pink',
                width: '400px',
                padding: '10px',
                margin: '5px auto'
            }}>

                <p>Marque:{children} </p>
                {colorInfo}

            </div>
        );
   }else{
    return(
        <div style={{
            backgroundColor: 'pink',
            width: '400px',
            padding: '10px',
            margin: '5px auto'
        }}>

            <p> Pas de data </p>
            
        </div>
    );
   }

}

export default Car;