import React, { Component } from 'react';


import './DisplayWord.css';


class DisplayWord extends Component {

    render() {

        const wordLetters = this.props.word.split('')
        const answer = wordLetters.map(letter => {
            let letterState = '_';
            if (this.props.guessedLetters.includes(letter)) {
                letterState = letter
            }
            return letterState + ' '
        })
        return (
            <div className="DisplayWord">
                <h3>{answer}</h3>
            </div>
        );
    }
}

export default DisplayWord;
//random choose a word
//display the correctly guessed letters
//underscores for missing letters
//display the letters not yet guessed 



//let the user guess a letter (form)
//check the letter is in the word
//update guess state 

//repeat until the game is over
//game over: word is guessed or out of guesses