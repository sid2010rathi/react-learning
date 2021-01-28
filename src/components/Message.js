import { Component } from "react";
import React from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : "Press Button",
            counter: 0
        }
    }

    press() {
        this.setState({
            message : "Button Pressed"
        })
    }

    increment() {
        /*this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log(this.state.counter)
        })*/

        this.setState(prevState => ({
            counter: prevState.counter + 1
        }), () => {
            console.log(this.state.counter)
        })
    }

    incrementFIve() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.press()}>Press</button>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFIve()}>Increment Five</button>
            </div>
        )
    }
}

export default Message