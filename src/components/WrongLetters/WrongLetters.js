import React, { Component } from 'react';


import './WrongLetters.css';


class WrongLetters extends Component {

    getWrongLetters() {
        const wrong = this.props.guessedLetters.filter(letter => {
            return !this.props.word.split('').includes(letter)
        })
        return wrong
    }
    render() {
        return (
            <div className="WrongLetters">
                {this.getWrongLetters}
            </div>
        );
    }
}

export default WrongLetters;
//random choose a word
//display the correctly guessed letters
//underscores for missing letters
//display the letters not yet guessed 



//let the user guess a letter (form)
//check the letter is in the word
//update guess state 

//repeat until the game is over
//game over: word is guessed or out of guesses