import React, { Component } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default class Lrb extends Component {
    constructor() {
        super();
        this.state = {
            colorList: ['red', 'yellow', 'green', 'orange', 'blue'],
            randomColor1: "",
            randomColor2: "",
            randomNumber: "",
            score: 0,
            countdown: 20,
            isPlaying: false,
            enableDisble: true,
            key: 1
        }
    }
    right = () => {
        if (this.state.randomColor1 === this.state.randomColor2) {
            this.setState({
                score: this.state.score + 1,
                key: this.state.key + 1,
                countdown: this.state.countdown - 2
            });
            this.generateRandomColor();
        } else {
            this.endGame()
        }
    }
    wrong = () => {
        if (this.state.randomColor1 != this.state.randomColor2) {
            this.setState({
                score: this.state.score + 1,
                key: this.state.key + 1,
                countdown: this.state.countdown - 2
            });
            this.generateRandomColor();
        } else {
            this.endGame()
        }
    }
    generateRandomColor = () => {

        const remvoedColor = this.state.colorList.splice(0, 1);
        this.state.colorList.splice(Math.floor((Math.random() * 4)), 0, remvoedColor);
        const colorIndex = Math.floor((Math.random() * 5))
        this.setState({
            randomNumber: colorIndex,
            randomColor1: this.state.colorList[Math.floor((Math.random() * 5))],
            randomColor2: this.state.colorList[colorIndex],
            enableDisble: false,
            isPlaying: true
        })
    }
    startGame = () => {
        this.setState({ score: 0, key: this.state.key + 1, countdown: 20 })
        this.generateRandomColor();
    }
    endGame = () => {
        this.setState({ enableDisble: true, isPlaying: false })
    }
    render() {
        const renderTime = ({ remainingTime }) => {
            if (remainingTime === 0) {
                return <div className="timer">Too lale</div>;
            }
        }
        return (
            <div className="pb-5" style={{ backgroundColor: `${this.state.enableDisble ? 'red' : 'green'}` }}>
                <h4>Left VS Right Brain</h4>
                <h1>{this.state.score}</h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <CountdownCircleTimer
                                key={this.state.key}
                                isPlaying={this.state.isPlaying}
                                duration={this.state.countdown}
                                colors={[
                                    ['#004777', 0.33],
                                    ['#F7B801', 0.33],
                                    ['#A30000', 0.33],
                                ]}
                                onComplete={this.endGame}
                            >
                                {renderTime}
                            </CountdownCircleTimer>
                        </div>
                        <div class="col-sm d-lg-block bg-white p-10 mb-5 rounded-pill">
                                <h3 className="mt-2 fsize" style={{ color: `${this.state.randomColor1}` }}>{this.state.randomColor2}</h3>
                        </div>
                        <div class="col-sm">
                            <button disabled={this.state.enableDisble} className="btn btn-success m-3" onClick={this.right}>Right</button>
                            <button disabled={this.state.enableDisble} className="btn btn-danger" onClick={this.wrong}>Wrong</button><br />
                            <button onClick={this.startGame} className="btn btn-primary">Start Game</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
