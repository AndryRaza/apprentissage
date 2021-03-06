import React, { Component } from 'react';
import Car from './Car';


class Form extends Component {

    state = {
        username: '',
        color: '',
        colors: ['','red','green','blue'],
        comment: ""
    }

    handlePseudo = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleColor = (e) => 
    {
        this.setState({
            color: e.target.value
        })
    }

    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();     //Interdire le rechargement de la page 
        console.log(`Username: ${this.state.username} Color: ${this.state.color} Comment: ${this.state.comment}`)
    }

    render() {
        return (
            <>
                <Car />
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                    </>
                    <br />
                    <>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color,index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </>
                    <br />
                    <>
                        <label>Commentaire</label>
                        <br />
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </>
                            <br />
                    <button>Valider</button>
                </form>
            </>
        )
    }
}

export default Form;