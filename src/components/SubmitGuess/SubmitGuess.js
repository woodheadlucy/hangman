import React, { Component } from 'react';


import './SubmitGuess.css';


class SubmitGuess extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const letterIn = this.refs.textInput.value
        this.props.updateGameState(letterIn)
        this.refs.textInput.value = ''
    }
    render() {
        return (
            <div className="SubmitGuess">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" ref='textInput' maxLength='1' />
                    <button>submit!</button>
                </form>
            </div >
        );
    }
}

export default SubmitGuess;
//random choose a word
//display the correctly guessed letters
//underscores for missing letters
//display the letters not yet guessed 



//let the user guess a letter (form)
//check the letter is in the word
//update guess state 

//repeat until the game is over
//game over: word is guessed or out of guesses