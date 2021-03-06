import React from 'react';

const Toto = (props) => {


    const btn_reponse = props.leState.messageMaman !== null ? (<button onClick={props.reponseToto}>Réponse</button>) : (<button disabled>Réponse</button>);

    return (
        <div>
            <h2>{props.name}</h2>
            {btn_reponse}
            <p> {props.leState.messageToto}</p>
        </div>
    );
}

export default Toto;