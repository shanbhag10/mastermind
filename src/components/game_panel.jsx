import React, { Component } from "react";
import Guess from "./combination";
import Options from "./options";
import { borderbox, center } from "../styles";

const panelbox = {
    ...borderbox,
    height: '100%',
    overflow: 'scroll'
}

const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const random_code = () => {
    const shuffled = options.sort(() => 0.5 - Math.random());
    let code = shuffled.slice(0, 4);
    return code;
}

const code = random_code()
console.log(code)

class GamePanel extends Component {
    state = {
        guesses: [
            ['', '', '', ''],
        ],
        results: [],
        newGuess: ['', '', '', ''],
        round: 0
    };

    displayResult = (currentResult) => {
        if (currentResult[0] === 4) {
            alert("Congrats! You are a genius.\n You cracked the code in " + (this.state.round+1) + " chances.");
            window.location.reload();
        }

        return currentResult[0] + ' C, ' + currentResult[1] + ' I';
    }

    calculateResult = () => {
        let correct = 0;
        let incorrect = 0;

        for (let i=0; i<4; i++) {
            let guess = this.state.newGuess[i]

            if (guess === code[i]) {
                correct += 1
                continue
            }

            if (code.includes(guess)) {
                incorrect += 1
            }
        }

        return [correct, incorrect]
    }

    handleCheck = () => {
        let guesses = [...this.state.guesses];
        guesses[this.state.round] = this.state.newGuess;
        guesses.push(['', '', '', ''])

        for (let i = 0; i < 4; i++) {
            let id = this.state.round + '_' + i;
            let box = document.getElementById(id);
            box.setAttribute("disabled", true);
        }

        let results = [...this.state.results]
        let currentResult = this.calculateResult()
        results.push(currentResult)

        this.setState({ 
            guesses: guesses, 
            round: this.state.round + 1,
            newGuess: ['', '', '', ''],
            results: results
        });

        document.getElementById(this.state.round+'_btn').style.display = 'none';
        document.getElementById(this.state.round+'_label').style.display = 'unset';
        document.getElementById(this.state.round+'_label').innerText = this.displayResult(currentResult);
    };

    handleGuess = (letter) => { 
        let newGuess = [...this.state.newGuess];

        for (let i = 0; i < 4; i++) {
            let id = this.state.round + '_' + i;
            let box = document.getElementById(id);
            if (box.value === '') {
                newGuess[i] = '';
            }
        }

        for (let i = 0; i < 4; i++) {
            if (newGuess[i] === '') {
                newGuess[i] = letter;
                this.setState({ newGuess: newGuess });
                let id = this.state.round + '_' + i;
                let box = document.getElementById(id);
                box.value = letter;
                break;
            }
        }
    };

    
    renderGuesses = () => {
        let guesses = [];
        for (let i=0; i < this.state.guesses.length; i++) {
            guesses.push(
                <Guess
                    onCheck={this.handleCheck}
                    round={i}
                    results={this.state.results}
                />
            )
        }

        return guesses;
    }

    render() {
        return (
            <div style={panelbox}>
                <div style={center}>
                    {this.renderGuesses()}
                </div>
                <Options
                    onGuess={this.handleGuess}
                />
            </div>
        );
    }
}

export default GamePanel;
