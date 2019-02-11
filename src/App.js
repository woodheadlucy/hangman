import React, { Component } from 'react';

import DisplayWord from './components/DisplayWord/DisplayWord'
import WrongLetters from './components/WrongLetters/WrongLetters'
import SubmitGuess from './components/SubmitGuess/SubmitGuess'
import './App.css';
import words from './words'

class App extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: [],
    guessesRemaining: 5
  }


  updateGuessedLetters = (letter) => {
    if (this.state.guessedLetters.includes(letter)) {
      alert(`You already gussed ${letter}`)
    } else {
      this.setState({
        guessedLetters: [...this.state.guessedLetters, letter]
      })
    }
  }

  updateGuessesRemaining(letter) {
    if (!this.state.guessedLetters.includes(letter) && !this.state.word.split('').includes(letter)) {
      this.setState({ guessesRemaining: this.state.guessesRemaining - 1 })
    }
  }



  gameOver = () => {
    if (this.state.guessesRemaining <= 0) {
      alert('you have lost')

    } else if (this.wordIsGuessed()) {
      alert('you won!!!')
    }
  }

  wordIsGuessed = () => {
    const guessState = this.state.word.split('').map(letter => {
      if (this.state.guessedLetters.includes(letter)) {
        return letter
      }
    })
    return guessState.join('') === this.state.word
  }

  updateGameState = (letter) => {
    this.updateGuessedLetters(letter)
    this.updateGuessesRemaining(letter)
    this.gameOver()
  }
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <h3>{this.state.guessesRemaining}</h3>
        {/* {this.state.word} */}
        <DisplayWord word={this.state.word} guessedLetters={this.state.guessedLetters} />
        <SubmitGuess updateGameState={this.updateGameState} />
        <WrongLetters word={this.state.word} guessedLetters={this.state.guessedLetters} />
      </div>
    );
  }
}

export default App;
//random choose a word
//display the correctly guessed letters
//underscores for missing letters
//display the letters not yet guessed 



//let the user guess a letter (form)
//check the letter is in the word
//update guess state 

//repeat until the game is over
//game over: word is guessed or out of guesses