import React, { Component } from 'react';

export default class Multitasking extends Component {
    constructor() {
        super();
        this.state = {
            operationslist: ['/', '*', '+', '-'],
            randomNo1: "",
            randomNo2: "",
            result: "",
            fake: "",
            maincount:1,
            counter: "1",
            score:0
        }
    }
    generateRandomNumber = () => {
        let temp;
        this.setState({
            randomNo1: Math.floor((Math.random() * 20)),
            randomNo2: Math.floor((Math.random() * 20)),
            operation: this.state.operationslist[Math.floor((Math.random() * 3))],
        },
            function () {
                if (this.state.operation === '/') {
                    temp = Math.floor(this.state.randomNo1 / this.state.randomNo2);
                    this.setState({
                        result: Math.floor(this.state.randomNo1 / this.state.randomNo2),
                        fake: Math.floor(Math.random() * ((temp + 10) - (temp - 10) + 1)) + (temp - 10)
                    })
                } else if (this.state.operation === '*') {
                    temp = Math.floor(this.state.randomNo1 * this.state.randomNo2);
                    this.setState({
                        result: Math.floor(this.state.randomNo1 * this.state.randomNo2),
                        fake: Math.floor(Math.random() * ((temp + 10) - (temp - 10) + 1)) + (temp - 10)
                    })
                } else if (this.state.operation === '+') {
                    temp = Math.floor(this.state.randomNo1 + this.state.randomNo2);
                    this.setState({
                        result: Math.floor(this.state.randomNo1 + this.state.randomNo2),
                        fake: Math.floor(Math.random() * ((temp + 10) - (temp - 10) + 1)) + (temp - 10)
                    })
                } else {
                    temp = Math.floor(this.state.randomNo1 - this.state.randomNo2);
                    this.setState({
                        result: Math.floor(this.state.randomNo1 - this.state.randomNo2),
                        fake: Math.floor(Math.random() * ((temp + 10) - (temp - 10) + 1)) + (temp - 10)
                    })
                }
            }
        )

    }
    right = (n) =>{
        if(n === this.state.result){
            this.setState({score: this.state.score+1, maincount: this.state.maincount+1}, function(){
                this.setState({counter:this.state.maincount})
            })
            this.generateRandomNumber()
        }else{
            console.log("game over");
        }
    }
    wrong = (n) =>{
        if(n !== this.state.result){
            this.setState({score: this.state.score+1, maincount: this.state.maincount+1}, function(){
                this.setState({counter:this.state.maincount})
            })
            this.generateRandomNumber()
        }else{
            console.log("game over");
        }
    }

    render() {
        var varcounter = " " + this.state.counter;
        return (
            <div>
                <h2>Score: {this.state.score}</h2>
                <p>{typeof(this.state.counter)}</p>
                <h2>MainCounter: {this.state.maincount} StrCounter: {this.state.counter}</h2>
                <button onClick={this.generateRandomNumber}>Start Game</button><br />
                <button onClick={() => this.right(varcounter.indexOf('5') > -1 || varcounter.indexOf('0') > -1? this.state.fake:this.state.result)}>right</button><br />
                <button onClick={() => this.wrong(varcounter.indexOf('5') > -1 || varcounter.indexOf('0') > -1? this.state.fake:this.state.result)}>Wrong</button><br />
                <h3>{this.state.randomNo1} {this.state.operation} {this.state.randomNo2} = {varcounter.indexOf('5') > -1 || varcounter.indexOf('0') > -1? this.state.fake:this.state.result}?</h3>
            </div>
        )
    }
}
